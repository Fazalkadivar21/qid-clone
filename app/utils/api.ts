/**
 * Resilient API fetching utilities for static site generation
 * Handles timeouts, retries, and errors gracefully
 */

export interface FetchOptions {
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

const DEFAULT_TIMEOUT = 10000; // 10 seconds
const DEFAULT_RETRIES = 3;
const DEFAULT_RETRY_DELAY = 1000; // 1 second

/**
 * Fetch with timeout and retry logic for build-time API calls
 * Safe for use in generateStaticParams and generateMetadata
 */
export async function fetchWithRetry<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T | null> {
  const {
    timeout = DEFAULT_TIMEOUT,
    retries = DEFAULT_RETRIES,
    retryDelay = DEFAULT_RETRY_DELAY,
  } = options;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'Accept': 'application/json',
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
      }

      const data: T = await response.json();
      return data;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      
      // Log retry attempts
      if (attempt < retries) {
        console.log(
          `Attempt ${attempt + 1} failed: ${lastError.message}. Retrying in ${retryDelay}ms...`
        );
        await new Promise(resolve => setTimeout(resolve, retryDelay));
      }
    }
  }

  // If all retries failed, log error and return null
  console.error(
    `Failed to fetch after ${retries + 1} attempts: ${lastError?.message}`
  );
  return null;
}

/**
 * Safely fetch static params with fallback
 * Returns empty array if API is unavailable during build
 */
export async function fetchStaticParams<T extends { slug: string }>(
  url: string
): Promise<Array<{ slug: string }>> {
  const data = await fetchWithRetry<{ data: T[] }>(url, {
    timeout: 15000, // Longer timeout for bulk operations
    retries: 2,
    retryDelay: 2000,
  });

  if (!data?.data) {
    console.warn(`No data returned from ${url}. Using empty params.`);
    return [];
  }

  return data.data.map((item) => ({
    slug: item.slug,
  }));
}

/**
 * Safely fetch single article data with fallback
 * Returns null if API is unavailable
 */
export async function fetchArticleData<T>(url: string): Promise<T | null> {
  return fetchWithRetry<{ data: T[] }>(url, {
    timeout: 12000,
    retries: 2,
    retryDelay: 1500,
  }).then((response) => response?.data?.[0] ?? null);
}

import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// @ts-ignore
import type { CSSProperties } from "react";

interface MarkdownRendererProps {
  children: ReactNode;
}

export default function MarkdownRenderer({ children }: MarkdownRendererProps) {
  return (
    <div className="prose raleway-regular prose-lg max-w-none text-xl">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }: any) {
            return !inline ? (
              <SyntaxHighlighter
                style={oneDark}
                language="text"
                PreTag="div"
                {...props}
                className="h-fit w-full"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          a: ({ href, children, ...props }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-pink-400 underline" {...props}>
              {children}
            </a>
          ),
          img: ({ src, alt, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt} className="rounded-lg max-w-full my-4" {...props} />
          ),
          h1: ({ children, ...props }) => (
            <h1 className="mt-8 mb-4 text-4xl font-bold" {...props}>{children}</h1>
          ),
          h2: ({ children, ...props }) => (
            <h2 className="mt-8 mb-4 text-3xl font-bold" {...props}>{children}</h2>
          ),
          h3: ({ children, ...props }) => (
            <h3 className="mt-8 mb-4 text-2xl font-bold" {...props}>{children}</h3>
          ),
          ul: ({ children, ...props }) => (
            <ul className="mb-6 list-disc list-inside" {...props}>{children}</ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="mb-6 list-decimal list-inside" {...props}>{children}</ol>
          ),
          p: ({ children, ...props }) => (
            <p className="mb-6" {...props}>{children}</p>
          ),
          blockquote: ({ children, ...props }) => (
            <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-600 my-6" {...props}>{children}</blockquote>
          ),
          em: ({ children, ...props }) => (
            <em className="font-sans italic" {...props}>{children}</em>
          ),
        }}
      >
        {children as string}
      </ReactMarkdown>
    </div>
  );
}

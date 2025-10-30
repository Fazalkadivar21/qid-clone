# 🔐 GitHub Secrets Setup Guide

## Overview

Your GitHub Actions workflow needs **4 required secrets** to build and deploy your static site to Firebase Hosting. Here's exactly how to get each one.

---

## 📋 Secrets Required

| Secret Name | What It Is | Required | Status |
|-------------|-----------|----------|--------|
| `FIREBASE_SERVICE_ACCOUNT` | Firebase authentication JSON | ✅ YES | Required |
| `FIREBASE_PROJECT_ID` | Your Firebase project ID | ✅ YES | Required |
| `NEXT_PUBLIC_STRAPI_URL` | Your Strapi API URL | ✅ YES | Required |
| `FIREBASE_HOSTING_DOMAIN` | Your hosting domain | ✅ YES | Required |
| `NEXT_PUBLIC_STRAPI_API_TOKEN` | Strapi authentication token | ❌ NO | Optional |

---

## 🔑 Getting Each Credential

### 1. FIREBASE_SERVICE_ACCOUNT (JSON Key File)

**What it is**: A JSON file that authenticates GitHub Actions to your Firebase project.

**How to get it**:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create one)
3. Click the **gear icon** (⚙️) in the top left
4. Select **Project Settings**
5. Go to the **Service Accounts** tab
6. Click **Generate New Private Key**
7. A JSON file will download
8. **Keep this file safe** - it contains sensitive credentials

**Example contents** (DO NOT SHARE):
```json
{
  "type": "service_account",
  "project_id": "qid-clone-abc123",
  "private_key_id": "abc123def456...",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQE...",
  "client_email": "firebase-adminsdk@qid-clone-abc123.iam.gserviceaccount.com",
  "client_id": "123456789",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/..."
}
```

---

### 2. FIREBASE_PROJECT_ID

**What it is**: The unique identifier for your Firebase project.

**How to get it**:

**Option A** - From Firebase Console:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Look at the top of the page
3. You'll see: **"My Project Name (project-id-here)"**
4. The text in parentheses is your project ID

**Option B** - From the JSON file:
1. Open the service account JSON file you downloaded
2. Look for the `"project_id"` field
3. Copy that value

**Example**:
```
qid-clone-abc123
```

---

### 3. NEXT_PUBLIC_STRAPI_URL

**What it is**: The URL to your Strapi CMS API where blog content is stored.

**How to get it**:

1. Go to your Strapi instance (where you manage blog content)
2. Look at the URL in your browser address bar
3. Copy the base URL (protocol + domain)

**Examples**:
```
https://api.oneqid.com
https://strapi.example.com
https://cms.yourdomain.com
```

**Local development** (if testing locally):
```
http://localhost:1337
```

**Important**: Make sure this URL is:
- ✅ Publicly accessible (GitHub Actions needs to reach it)
- ✅ Has `/api/articles` endpoint available
- ✅ Works without authentication (or see optional token below)

---

### 4. FIREBASE_HOSTING_DOMAIN

**What it is**: The URL where your site will be hosted.

**How to get it**:

**Option A** - If using Firebase-generated domain:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to **Hosting**
4. You'll see a domain like: `qid-clone-abc123.web.app`
5. Add `https://` prefix:
```
https://qid-clone-abc123.web.app
```

**Option B** - If using custom domain:
1. You already know it
2. Use it with `https://`:
```
https://oneqid.com
https://www.yourdomain.com
```

---

### 5. NEXT_PUBLIC_STRAPI_API_TOKEN (Optional)

**What it is**: An API token to authenticate with Strapi if your API requires it.

**When you need it**:
- ❌ Skip if your Strapi API is public
- ✅ Add if your API requires authentication

**How to get it**:

1. Go to your Strapi Admin Panel
2. Navigate to **Settings** (gear icon)
3. Go to **API Tokens**
4. Click **Create new API Token**
5. Configure:
   - **Name**: something like "GitHub Actions"
   - **Type**: "Read-only" (sufficient for blog content)
   - **Duration**: Permanent or set expiration
6. Click **Save**
7. Copy the token (appears once)

**Example**:
```
abc123def456ghi789jkl012mno345pqr678stu901
```

---

## 📝 How to Add Secrets to GitHub

### Step 1: Go to Repository Settings
1. Open your GitHub repository
2. Click **Settings** (top right)
3. In the left sidebar, click **Secrets and variables**
4. Click **Actions**

### Step 2: Add Each Secret

For each secret, click **New repository secret** and fill in:

#### Secret 1: FIREBASE_SERVICE_ACCOUNT
- **Name**: `FIREBASE_SERVICE_ACCOUNT`
- **Value**: Paste the entire JSON file contents (just the JSON, nothing else)

Click **Add secret**

#### Secret 2: FIREBASE_PROJECT_ID
- **Name**: `FIREBASE_PROJECT_ID`
- **Value**: Your project ID (e.g., `qid-clone-abc123`)

Click **Add secret**

#### Secret 3: NEXT_PUBLIC_STRAPI_URL
- **Name**: `NEXT_PUBLIC_STRAPI_URL`
- **Value**: Your Strapi URL (e.g., `https://api.oneqid.com`)

Click **Add secret**

#### Secret 4: FIREBASE_HOSTING_DOMAIN
- **Name**: `FIREBASE_HOSTING_DOMAIN`
- **Value**: Your hosting domain (e.g., `https://oneqid.com`)

Click **Add secret**

#### Secret 5 (Optional): NEXT_PUBLIC_STRAPI_API_TOKEN
- **Name**: `NEXT_PUBLIC_STRAPI_API_TOKEN`
- **Value**: Your Strapi API token

Click **Add secret**

### Step 3: Verify

You should see all secrets listed with ●●●●● (masked):

```
✓ FIREBASE_SERVICE_ACCOUNT     ●●●●●
✓ FIREBASE_PROJECT_ID           ●●●●●
✓ NEXT_PUBLIC_STRAPI_URL        ●●●●●
✓ FIREBASE_HOSTING_DOMAIN       ●●●●●
✓ NEXT_PUBLIC_STRAPI_API_TOKEN  ●●●●● (optional)
```

---

## 🔍 Checklist

Before deploying, verify you have:

- [ ] Firebase Console access
- [ ] Created Firebase Service Account JSON
- [ ] Found Firebase Project ID
- [ ] Found Strapi API URL
- [ ] Found Firebase Hosting Domain
- [ ] (Optional) Found Strapi API Token
- [ ] Added all 4 required secrets to GitHub
- [ ] Secrets are showing as ●●●●● (masked)

---

## 🧪 Testing Your Setup

After adding secrets, test the build locally:

```bash
# Build the project
pnpm run build

# Should complete with:
# ✓ Collecting page data    
# ✓ Generating static pages (44/44)
# ✓ Exporting (2/2)
```

Then push to trigger GitHub Actions:

```bash
git add .
git commit -m "Add CI/CD configuration"
git push origin main
```

Watch the build in **Actions** tab on GitHub.

---

## 🆘 Troubleshooting

### Build fails: "fetch failed"
- **Cause**: Strapi URL not accessible or wrong
- **Fix**: Verify `NEXT_PUBLIC_STRAPI_URL` is correct and publicly accessible

### Build fails: "FIREBASE_SERVICE_ACCOUNT is invalid"
- **Cause**: JSON pasted incorrectly
- **Fix**: Make sure you pasted the entire JSON file as-is

### Deployment fails: "project not found"
- **Cause**: Wrong `FIREBASE_PROJECT_ID`
- **Fix**: Double-check project ID from Firebase Console

### Build times out
- **Cause**: Strapi API responding slowly
- **Fix**: Already handled with timeouts, but check Strapi uptime

---

## ✅ Security Best Practices

✅ **DO**:
- Keep service account JSON file secure
- Rotate API tokens periodically
- Use read-only tokens where possible
- Review GitHub Actions logs for errors

❌ **DON'T**:
- Commit credentials to GitHub
- Share secrets with others
- Use in public repositories (unless masked)
- Hardcode credentials in code

---

## 📚 Quick Reference

```yaml
Needed in GitHub Actions Workflow:
├── FIREBASE_SERVICE_ACCOUNT   # JSON authentication key
├── FIREBASE_PROJECT_ID         # Project identifier
├── NEXT_PUBLIC_STRAPI_URL      # API endpoint
├── FIREBASE_HOSTING_DOMAIN     # Your domain
└── (Optional) API Token        # For authenticated APIs
```

---

## 🚀 Next Steps

1. **Gather all 4 credentials** using this guide
2. **Add them to GitHub** (Settings → Secrets → Actions)
3. **Test locally**: `pnpm run build`
4. **Commit and push** to trigger deployment
5. **Monitor build** in GitHub Actions tab

---

## 💡 Need Help?

- **Firebase docs**: https://firebase.google.com/docs/hosting
- **Strapi docs**: https://docs.strapi.io/
- **GitHub Actions**: https://docs.github.com/en/actions

---

You're all set! Your static site is ready to deploy. 🚀

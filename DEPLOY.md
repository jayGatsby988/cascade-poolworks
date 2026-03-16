# Deploy Cascade Poolworks so your client can view it

The site builds successfully. To get a **shareable link** (e.g. `https://cascade-poolworks.vercel.app`), use **Vercel** (free, no credit card for hobby use).

## Option 1: Deploy with Vercel (recommended)

1. **Put the project on GitHub** (if it isn’t already):
   - Create a new repo at [github.com/new](https://github.com/new).
   - In your project folder, run:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git push -u origin main
     ```
   - Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in (GitHub is easiest).
   - Click **“Add New…” → “Project”**.
   - **Import** your GitHub repo (e.g. `YOUR_USERNAME/YOUR_REPO_NAME`).
   - Leave the defaults (Framework: Next.js, Root Directory: `./`).
   - Click **“Deploy”**.
   - When it finishes, you’ll get a URL like `https://cascade-poolworks-xxxx.vercel.app`.

3. **Share the link** with your client. It will stay live on the free tier.

---

## Option 2: Quick preview without an account (temporary link)

If you only need to show it once and don’t want to sign up yet:

1. In the project folder, run: `npm run dev`
2. In another terminal, run: `npx localtunnel --port 3000`
3. Use the URL it prints (e.g. `https://something.loca.lt`). It only works while both commands are running and your computer is on.

For a **permanent link** your client can click anytime, use **Option 1 (Vercel)**.

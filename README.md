# Xperishables Support & AI Agents

A production-ready Whop app for customer support and AI agents, built from the official Whop Next.js template.

## Features

- Experience-scoped, runs inside Whop iFrame (dev proxy)
- All features gated by Whop entitlements
- Helpdesk: Inbox, Agents, Knowledge Base, Analytics, Settings
- In-app purchases, paywall, and quota enforcement
- Minimal, clean UI

## Setup

1. **Clone and scaffold from Whop’s official template:**

   ```
   npx create-next-app@latest whop-support-agents \
     -e https://github.com/whopio/whop-nextjs-app-template
   cd whop-support-agents
   ```

2. **Install dependencies:**

   ```
   pnpm i
   pnpm add @whop/react @whop-apps/iframe
   pnpm add -D @whop-apps/dev-proxy
   ```

3. **Update `package.json` scripts:**

   ```
   "scripts": {
     "dev": "whop-proxy --command 'next dev'",
     "build": "next build",
     "start": "next start -p 3000"
   }
   ```

4. **Create `.env.local` and fill in from Whop dashboard:**

   ```
   NEXT_PUBLIC_WHOP_APP_ID=app_xxxxxxxxx
   WHOP_API_KEY=whop_api_xxxxxxxxx
   WHOP_WEBHOOK_SECRET=whsec_xxxxxxxxx
   NEXT_PUBLIC_WHOP_COMPANY_ID=biz_xxxxxxxxx
   NEXT_PUBLIC_WHOP_AGENT_USER_ID=user_xxxxxxxxx
   NEXT_PUBLIC_EXPERIENCE_ID=exp_xxxxxxxxx
   NEXT_PUBLIC_STARTER_PLAN_ID=plan_starter_xxx
   NEXT_PUBLIC_PRO_PLAN_ID=plan_pro_xxx
   NEXT_PUBLIC_SCALE_PLAN_ID=plan_scale_xxx
   ```

5. **Run locally (proxied for Whop iFrame):**

   ```
   pnpm dev
   ```

6. **Wire to Whop dashboard:**

   - Go to Whop dashboard → Developer → Create App
   - Copy App ID and API key into `.env.local`
   - Set local paths/env, flip dev toggle to Local
   - Set Base URL, App Path (`/experience/[experienceId]`), and register webhook secret

7. **Deploy:**

   - Deploy to Vercel/Netlify
   - Set all env vars in dashboard
   - Switch dashboard from Local to Production when ready

## Acceptance Tests

- App loads in Whop iFrame via dev proxy, paywall if no access
- Purchasing a plan opens Whop modal and unlocks features
- Entitlement checks run on server for every protected route
- Quotas enforced per tier
- Webhook validates and increments usage/credits
- Inbox, Agents, KB, Analytics, Settings pages render
- `/api/webhook` returns 200 to GET (test ping)
- `/api/agent/answer` returns a stubbed answer

---

**See Whop Docs for more: https://docs.whop.com/**
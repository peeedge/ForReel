This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

On Windows, the bootstrap scripts handle setup for you:

| Command | What it does |
| --- | --- |
| `start.cmd` or `npm run dev:start` | Checks Node (20.9+), stops any server already running, runs `npm ci` if dependencies are missing or out of date, then starts the dev server on port 3000. Add `-Port 3100` or `-Open` (opens the browser). |
| `stop.cmd` or `npm run dev:stop` | Stops dev servers started from this repo plus any Node server on port 3000. Add `-DryRun` to list them without stopping. |

`npm run dev:start` needs dependencies already installed (npm itself must run first); `start.cmd` works on a fresh clone.

Or run the development server directly:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

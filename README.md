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

## Deploy on GitHub Pages

The app is built as a static export (`output: "export"`), so `npm run build` writes a plain HTML/CSS/JS site to `out/`. The whole puzzle schedule is bundled at build time and the browser picks the puzzle for the current UTC date.

`.github/workflows/deploy-pages.yml` checks, builds, and publishes the site on every push to `main` (or manually from the Actions tab). One-time setup: in the repository's **Settings → Pages**, set **Source** to **GitHub Actions**. The site is then served at `https://<user>.github.io/ForReel/`; the workflow passes that `/ForReel` prefix to Next.js as `PAGES_BASE_PATH`.

Optional repository variables, set under **Settings → Secrets and variables → Actions → Variables** (re-run the workflow after changing them):

| Variable | Effect |
| --- | --- |
| `REEL_DAILY_LAUNCH_DATE` | `YYYY-MM-DD` date of puzzle No. 1, instead of the default. |
| `REEL_DAILY_ALLOW_PAST_GAMES` | Earlier puzzles are listed in the Archive and can be opened with `?date=YYYY-MM-DD`, e.g. `/ForReel/?date=2026-10-01`. Set to `0` to hide the Archive and refuse `?date=`. Future dates are always refused and show today's puzzle. |

In development (`npm run dev`), `?date=` always works, for any date, so upcoming puzzles can be previewed. Archive puzzles count towards stats but not streaks.

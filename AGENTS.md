<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# wanderlust

Single Next.js 16 App Router app (`src/app`), not a monorepo. npm is the package manager (commit `package-lock.json`). No tests, CI, or formatter exist yet.

## Commands

- Dev server: `npm run dev` (Turbopack; also regenerates the managed block above)
- Verify changes: `npm run lint` then `npx tsc --noEmit` — there is no `typecheck` script
- Typecheck gotcha: route globals like `LayoutProps<"/">` in `src/app/layout.tsx` come from generated `.next/types/` (gitignored). On a fresh clone, run `npx next typegen` (or `npm run build`) before `tsc`, or it fails with missing globals

## Stack quirks (differ from defaults)

- Next 16 runs with `cacheComponents: true` + `partialPrefetching: true`: the new caching model. Dynamic reads (`cookies()`, `headers()`, uncached fetch) must sit inside `<Suspense>` or the dev overlay/build errors with a "blocking-route" insight. Ignore pre-Cache-Components caching advice from training data
- React Compiler is on (`reactCompiler: true`). Don't add manual `useMemo` / `React.memo` / `useCallback` noise; the Rules of React are enforced strictly
- Tailwind v4: no `tailwind.config.*` file — theme tokens live in `src/app/globals.css` under `@theme inline`. CSS loads via the `@tailwindcss/turbopack` rule in `next.config.ts`
- shadcn uses the `base-nova` style (`components.json`): UI primitives are `@base-ui/react` (Base UI), not Radix. Add components with `npx shadcn add <name>`; they land in `src/components/ui/`
- `cn()` is re-exported from the `cn` npm package in `src/lib/utils.ts` — import from `@/lib/utils`, don't add clsx/tailwind-merge
- Path alias: `@/*` → `./src/*`

## AGENTS.md is partly machine-managed

Everything between the `nextjs-agent-rules` markers is rewritten by `next dev`. Add custom instructions outside the markers and never edit inside them.

# obuild-bug-report

## Bug Report: `obuild` skips dependency bundling

### Steps to Reproduce
1. Install dependencies with `pnpm install`.
2. Run the bundler: `pnpm build-obuild`.
3. Inspect the output file `dist-obuild/main.mjs` – it still contains `import { v4 } from "uuid";` instead of the bundled code.
4. Compare with `pnpm build-rolldown`, where `dist-rolldown/main.js` includes the `uuid` implementation inlined in the bundle.

### Expected Behavior
`obuild` should bundle runtime dependencies like `uuid` into the output so the generated file can be published without requiring external packages.

### Actual Behavior
`dist-obuild/main.mjs` references `uuid` as an external import and does not include its source.

### Additional Information
- `obuild` version: 0.2.1
- `rolldown` version: 1.0.0-beta.33
- Node.js version: v20.19.4

It is unclear how to configure `obuild` to bundle dependencies. Guidance or a fix would help when publishing bundled code.

# Presets for TypeScript

This package provides predefined,
opinionated [TypeScript](https://www.typescriptlang.org) configurations to be
applied to the [`extends`](https://www.typescriptlang.org/tsconfig#extends)
property in `tsconfig.json`.

## Installation
Install the [`typescript`](https://www.npmjs.com/package/typescript)
and [
`@rainstormy/presets-typescript`](https://www.npmjs.com/package/@rainstormy/presets-typescript)
packages:

```shell
npm install --save-dev typescript @rainstormy/presets-typescript
```
or
```shell
pnpm add --save-dev typescript @rainstormy/presets-typescript
```
or
```shell
yarn add --dev typescript @rainstormy/presets-typescript
```

## Usage
Create a [`tsconfig.json`](https://www.typescriptlang.org/tsconfig) file and
extend `@rainstormy/presets-typescript/base` to enable type-checking in general.

In addition to this, you can extend some of the following configurations to
refine the TypeScript settings for your project:

| Configuration                                | Description                                  |
|----------------------------------------------|----------------------------------------------|
| `@rainstormy/presets-typescript/es2023`      | Targets web browser and full-stack projects. |
| `@rainstormy/presets-typescript/es2023-node` | Targets server-side Node.js projects.        |
| `@rainstormy/presets-typescript/dts+js`      | Generates `js` and `d.ts` files.             |
| `@rainstormy/presets-typescript/dts`         | Generates `d.ts` files only.                 |

You can override the predefined settings by specifying the desired options like
`compilerOptions` and `include` as usual.

For example:

```json
{
    "$schema": "https://json.schemastore.org/tsconfig",
    "extends": [
        "@rainstormy/presets-typescript/base",
        "@rainstormy/presets-typescript/es2023",
        "@rainstormy/presets-typescript/dts+js"
    ],
    "compilerOptions": {
        "baseUrl": "./",
        "incremental": true,
        "noEmitOnError": false,
        "outDir": "dist",
        "sourceMap": true
    },
    "include": ["./src/**/*.ts", "./*.config.js", "./*.config.ts"]
}
```

### Eject from the preset
Copy the relevant parts of
the [preset source files](https://github.com/rainstormy/presets-typescript/tree/main/src)
and insert them directly into the `tsconfig.json` file. Make adjustments as
needed.

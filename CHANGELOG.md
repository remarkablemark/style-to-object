# Changelog

## [1.0.10](https://github.com/remarkablemark/style-to-object/compare/v1.0.9...v1.0.10) (2025-10-02)

### Bug Fixes

- remove esm build dir ([79df2e8](https://github.com/remarkablemark/style-to-object/commit/79df2e80346d57668dae6d95626ad6b8fa501178))
- switch to true esm build ([8e7b7ed](https://github.com/remarkablemark/style-to-object/commit/8e7b7edad01aa46c6b83d8308da5e9fffd143e20))

### Miscellaneous Chores

- export StyleObject interface ([45e8343](https://github.com/remarkablemark/style-to-object/commit/45e834300a2f75eb165f2f8100d6c356fa2c7b2a))

## [1.0.9](https://github.com/remarkablemark/style-to-object/compare/v1.0.8...v1.0.9) (2025-06-06)

### Miscellaneous Chores

- release 1.0.9 ([216aab1](https://github.com/remarkablemark/style-to-object/commit/216aab1d363b44a7611b3cc562a921c10986b15b))

## [1.0.8](https://github.com/remarkablemark/style-to-object/compare/v1.0.7...v1.0.8) (2024-09-11)

### Build System

- **deps:** bump inline-style-parser from 0.2.3 to 0.2.4 ([#383](https://github.com/remarkablemark/style-to-object/issues/383)) ([1d45c31](https://github.com/remarkablemark/style-to-object/commit/1d45c318fc85b7054b5dbe2d256bc02179bb6310))

## [1.0.7](https://github.com/remarkablemark/style-to-object/compare/v1.0.6...v1.0.7) (2024-08-28)

### Continuous Integration

- **github:** publish package to npm registry with provenance ([496fc11](https://github.com/remarkablemark/style-to-object/commit/496fc11f70d57d457cebb0d0fbb9eab881871e8d))

## [1.0.6](https://github.com/remarkablemark/style-to-object/compare/v1.0.5...v1.0.6) (2024-03-27)

### Build System

- **deps:** bump inline-style-parser from 0.2.2 to 0.2.3 ([#301](https://github.com/remarkablemark/style-to-object/issues/301)) ([22af20c](https://github.com/remarkablemark/style-to-object/commit/22af20ceb8f82e24b374d08d28c3af204b59b81e))

## [1.0.5](https://github.com/remarkablemark/style-to-object/compare/v1.0.4...v1.0.5) (2023-12-01)

### Bug Fixes

- **esm:** fix ESM types by adding index.d.mts ([73ae1d4](https://github.com/remarkablemark/style-to-object/commit/73ae1d41d97eb4db0983fd06d3b6ea2ef436ea65)), closes [#205](https://github.com/remarkablemark/style-to-object/issues/205)

## [1.0.4](https://github.com/remarkablemark/style-to-object/compare/v1.0.3...v1.0.4) (2023-10-31)

### Bug Fixes

- **package:** specify "types" in package.json ([1cb585b](https://github.com/remarkablemark/style-to-object/commit/1cb585b796bfcc33790ee319ec9c0ceb5a1048d7))

## [1.0.3](https://github.com/remarkablemark/style-to-object/compare/v1.0.2...v1.0.3) (2023-10-20)

### Bug Fixes

- **esm:** ensure index.mjs is compatible with rollup umd build ([40b92c3](https://github.com/remarkablemark/style-to-object/commit/40b92c3e8d13eab96b65f8aa2a656e8bc9a94a15))

## [1.0.2](https://github.com/remarkablemark/style-to-object/compare/v1.0.1...v1.0.2) (2023-10-19)

### Bug Fixes

- **package:** add "/src" to files to fix source map warning ([597666b](https://github.com/remarkablemark/style-to-object/commit/597666b92e5cc10c7185d94d30c7549bf0ab4263))

## [1.0.1](https://github.com/remarkablemark/style-to-object/compare/v1.0.0...v1.0.1) (2023-10-17)

### Bug Fixes

- **package:** add types to exports in package.json ([6d37b8c](https://github.com/remarkablemark/style-to-object/commit/6d37b8c973c952d5b4171feeff64dcc00cbfb7c2))

## [1.0.0](https://github.com/remarkablemark/style-to-object/compare/v0.4.4...v1.0.0) (2023-10-15)

### ⚠ BREAKING CHANGES

- Iterator excludes `Comment` and CommonJS requires the `default` key.

### Code Refactoring

- migrate to TypeScript ([6cf1d92](https://github.com/remarkablemark/style-to-object/commit/6cf1d92650d7669244b423d3ae9d345fd563f855))

## [0.4.4](https://github.com/remarkablemark/style-to-object/compare/v0.4.3...v0.4.4) (2023-10-15)

### Bug Fixes

- **index:** export default function and add `Comment` to index.d.ts ([07d7c98](https://github.com/remarkablemark/style-to-object/commit/07d7c9825d1c111f1083aaadf9fd4891eb7b1f7a))

## [0.4.3](https://github.com/remarkablemark/style-to-object/compare/v0.4.2...v0.4.3) (2023-10-14)

### Build System

- **rollup:** generate sourcemap for UMD build ([463e4b5](https://github.com/remarkablemark/style-to-object/commit/463e4b59ea8249df831977b4008a973e1f5d3cfe))

## [0.4.2](https://github.com/remarkablemark/style-to-object/compare/v0.4.1...v0.4.2) (2023-08-02)

### Bug Fixes

- do not throw error when loading library as UMD script ([24bb01d](https://github.com/remarkablemark/style-to-object/commit/24bb01df3b81f22ebe7ae6760cb7954d4a936c7d))

## [0.4.1](https://github.com/remarkablemark/style-to-object/compare/v0.4.0...v0.4.1) (2023-01-16)

### Bug Fixes

- include types in export ([3026691](https://github.com/remarkablemark/style-to-object/commit/3026691e090a6763f3b03d13a9251952d15b2e7a))

## [0.4.0](https://github.com/remarkablemark/style-to-object/compare/v0.3.0...v0.4.0) (2022-12-03)

### Features

- add ESM support ([2e7d959](https://github.com/remarkablemark/style-to-object/commit/2e7d959f4ced37c40de82a1c7a4fbb2f299f04cd))

## [0.3.0](https://github.com/remarkablemark/style-to-object/compare/v0.2.3...v0.3.0) (2019-11-07)

### Bug Fixes

- **index:** update return type of main function (remove `any`) ([c6e8a54](https://github.com/remarkablemark/style-to-object/commit/c6e8a54))

### Features

- add typescript support ([74a1b83](https://github.com/remarkablemark/style-to-object/commit/74a1b83))

### Tests

- **index:** add test for TS declaration file ([b029a4b](https://github.com/remarkablemark/style-to-object/commit/b029a4b))

### [0.2.3](https://github.com/remarkablemark/style-to-object/compare/v0.2.2...v0.2.3) (2019-06-22)

### Build System

- **package:** add field "files" and remove `.npmignore` ([fdf3966](https://github.com/remarkablemark/style-to-object/commit/fdf3966))
- **package:** update script `build:min` to generate sourcemap ([a13be58](https://github.com/remarkablemark/style-to-object/commit/a13be58))
- **package:** upgrade devDependencies ([377bb40](https://github.com/remarkablemark/style-to-object/commit/377bb40))
- **rollup:** remove `uglify-es` from config as it's unneeded ([b0951e0](https://github.com/remarkablemark/style-to-object/commit/b0951e0))

### Tests

- organize and rename describe blocks ([8d4c004](https://github.com/remarkablemark/style-to-object/commit/8d4c004))
- organize data (test suites) into cases, errors, and invalids ([513732b](https://github.com/remarkablemark/style-to-object/commit/513732b))
- rename `test/cases.js` to `test/data.js` ([75d084d](https://github.com/remarkablemark/style-to-object/commit/75d084d))
- **data:** add more test cases and errors ([c9242c7](https://github.com/remarkablemark/style-to-object/commit/c9242c7))
- **data:** refactor test data from object to array format ([1a07a38](https://github.com/remarkablemark/style-to-object/commit/1a07a38))

<a name="0.2.2"></a>

## [0.2.2](https://github.com/remarkablemark/style-to-object/compare/v0.2.1...v0.2.2) (2018-09-13)

<a name="0.2.1"></a>

## [0.2.1](https://github.com/remarkablemark/style-to-object/compare/v0.2.0...v0.2.1) (2018-05-09)

### Bug Fixes

- **package:** upgrade css@2.2.3 which resolves security vulnerability ([d8b94c0](https://github.com/remarkablemark/style-to-object/commit/d8b94c0))

<a name="0.2.0"></a>

# [0.2.0](https://github.com/remarkablemark/style-to-object/compare/v0.1.0...v0.2.0) (2017-11-26)

### Features

- **parser:** add optional argument iterator ([a3deea8](https://github.com/remarkablemark/style-to-object/commit/a3deea8))

<a name="0.1.0"></a>

# 0.1.0 (2017-11-23)

### Bug Fixes

- **parser:** do not add to output if css value is empty ([0759da7](https://github.com/remarkablemark/style-to-object/commit/0759da7))

### Features

- **parser:** create client parser ([cd85a31](https://github.com/remarkablemark/style-to-object/commit/cd85a31))
- **parser:** create parser that returns null for invalid values ([24f4f02](https://github.com/remarkablemark/style-to-object/commit/24f4f02))
- **parser:** parse inline style to object with css.parse ([04793b0](https://github.com/remarkablemark/style-to-object/commit/04793b0))

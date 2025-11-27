# web-compression

[![Build Status][github_actions_badge]][github_actions_link]
[![Coverage][coveralls_badge]][coveralls_link]
[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]

[github_actions_badge]: https://img.shields.io/github/actions/workflow/status/fisker/web-compression/continuous-integration.yml?barnach=main&style=flat-square
[github_actions_link]: https://github.com/fisker/web-compression/actions?query=branch%3Amain
[coveralls_badge]: https://img.shields.io/coveralls/github/fisker/web-compression/main?style=flat-square
[coveralls_link]: https://coveralls.io/github/fisker/web-compression?branch=main
[license_badge]: https://img.shields.io/npm/l/prettier-format.svg?style=flat-square
[license_link]: https://github.com/fisker/web-compression/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/web-compression.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/web-compression

> A tiny (de)compression library.

## Install

```bash
yarn add web-compression
```

## Usage

```js
import {compress, decompress} from 'web-compression'

const compressed = await compress('fisker').arrayBuffer()
console.log(compressed)
//=> ArrayBuffer {
//   [Uint8Contents]: <1f 8b 08 00 00 00 00 00 00 0a 4b cb 2c ce 4e 2d 02 00 99 fc c4 60 06 00 00 00>,
//   byteLength: 26
// }

const decompressed = decompress(compressed)
console.log(await decompressed.text())
//=> 'fisker'
```

## API

### `(de)compress(body, format?)`

Returns an [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response) with (de)compressed data.

#### `body`

Type: `Blob | ArrayBuffer | TypedArray | DataView | string`

See body argument of [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#body).

#### `format`

Type: `'gzip' | 'deflate' | 'deflate-raw' | 'brotli'`

See format argument of [`CompressionStream`](https://developer.mozilla.org/en-US/docs/Web/API/CompressionStream/CompressionStream#format) and [`DecompressionStream`](https://developer.mozilla.org/en-US/docs/Web/API/DecompressionStream/DecompressionStream#format).

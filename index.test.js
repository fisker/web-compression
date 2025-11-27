import assert from 'node:assert/strict'
import fs from 'node:fs'
import test from 'node:test'
import {compress, decompress} from './index.js'

const url = new URL(import.meta.url)

// https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#body
const blob = await fs.openAsBlob(url, {type: 'application/octet-stream'})
const text = await blob.text()
const arrayBuffer = await blob.arrayBuffer()
const uint8Array = new Uint8Array(arrayBuffer)
const dataView = new DataView(arrayBuffer)

for (const data of [blob, arrayBuffer, uint8Array, dataView, text]) {
  for (const format of [
    'gzip',
    'deflate',
    'deflate-raw',
    // 'brotli'
  ]) {
    test(`${data.constructor.name}(${format})`, async () => {
      const compressedBlob = await compress(data, format).blob()
      const decompressedBlob = await decompress(compressedBlob, format).blob()

      assert.ok(compressedBlob.size < blob.size)
      assert.equal(await decompressedBlob.text(), text)
    })
  }
}

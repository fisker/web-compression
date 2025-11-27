const DEFAULT_FORMAT = 'gzip'

const createTransform =
  (Stream) =>
  (body, format = DEFAULT_FORMAT) =>
    new Response(new Response(body).body.pipeThrough(new Stream(format)))

export const compress = /* @__PURE__ */ createTransform(CompressionStream)
export const decompress = /* @__PURE__ */ createTransform(DecompressionStream)

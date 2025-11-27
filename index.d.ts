type DEFAULT_FORMAT = 'gzip'
type SupportedFormat = DEFAULT_FORMAT | 'deflate' | 'deflate-raw' | 'brotli'

/**
Compress data.

@param {ConstructorParameters<Response>[0]} body
@param {SupportedFormat} [format]
@returns {Response}
*/
export function compress(body: BodyInit, format?: SupportedFormat): Response

/**
Decompress data.

@param {ConstructorParameters<Response>[0]} body
@param {SupportedFormat} [format]
@returns {Response}
*/
export function decompress(body: BodyInit, format?: SupportedFormat): Response

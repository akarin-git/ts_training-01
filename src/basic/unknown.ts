export default function unknownSample() {
  const maybeNumber: unknown = 10
  console.log('unknownSample 1', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo'
  console.log('unknownSample 2', typeof isFoo, isFoo)

  // const sum = maybeNumber +  10
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknownSample 3', typeof sum, sum)
  }
}

export default function genericsAdvancedSample() {
  // map関数のシグネチャ
  // (fn: (item: T) => U ...文字列で入ってきたらnumberで返すよ)
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const numbers = mapStringsToNumbers(['123', '123', '321'], (item) => Number(item))

  console.log('genericsAdvancedSample 1:', numbers)

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }

  const strings = mapNumbersToStrings(numbers, (item) => String(item))

  console.log('genericsAdvancedSample 1:', strings)

  // 呼び出し側の共通化
  // ポリモーフィズム
  // 多能性・多相性 = 色々な形に変化できること

  // ジェネリック型を用いると...
  // ・型を抽象化して共通化できる
  // ・呼び出す時に具体的な型を渡す
}

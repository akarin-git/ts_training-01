export default function tupleSample() {
  // 一般的なタプルの型定義
  // 厳格な配列 = タプル
  // ・タプルは配列の各要素の数と型を定義できる
  const response: [number, string] = [200, 'OK']
  // response = [400, "Bad Request", "Email parameter is missing"]
  // response = ["400", "Bad Request"]
  // 上記はエラー
  console.log('tupleSample 1:', response)

  // 可変長（レストパラメーター）を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlfriends.push('Misa')

  console.log('tupleSample 2:', girlfriends)
}

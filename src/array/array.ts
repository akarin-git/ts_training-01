export default function arraySample() {
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123)

  console.log('ArraySample 1:', colors)

  const even: number[] = [2, 4, 6]
  even.push(10)
  // even.push("123")

  console.log('ArraySample 2:', even)

  const ids: (string | number)[] = ['ABC', 10]
  ids.push('DEF')
  ids.push(456)

  console.log('ArraySample 3:', ids)

  // 型推論
  const generateSomeArray = () => {
    const _someArray = [] //any[]
    _someArray.push(123) //number[]として推論される
    _someArray.push('ABC') //(string | number)[]として推論される
    return _someArray
  }

  const someArray = generateSomeArray()
  // someArray.push(true) //NG boolean

  // イミュータブルな配列を作る
  // 書き換え不可
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push("git fetch")
  // commands[2] = "git pull"

  console.log('ArraySample 4:', commands)
}

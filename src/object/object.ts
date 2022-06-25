export default function objectSample() {
  const a: object = {
    name: 'Akari',
    age: 28,
  }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  // console.log('objectSample 1:', country)

  country = {
    language: 'English',
    name: 'America',
  }

  console.log('objectSample 2:', country)

  // オプショナルとreadonly
  // readonly:上書き禁止
  // ?値がなくてもOK
  const akari: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'akari',
    firstName: 'sugiyama',
  }

  akari.gender = 'male'
  akari.lastName = 'sugi'
  // akari.firstName = "sugi" 上書き禁止エラー

  console.log('objectSample 2:', akari)

  // インデックスシグネチャー
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.Chaina = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('objectSample 3:', capitals)
}

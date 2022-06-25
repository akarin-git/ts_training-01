// TypeAlias..複数の場所で再利用するため。型に名前をつけるため
// 同名のtypeを宣言するとエラー
// 拡張しにくい
// アプリにはType typeAlias
// interface..オブジェクト・クラス・関数の構造を定義するため
// 同名はマージされる
// 拡張できることでバグを生む可能性
// ライブラリの開発向き（拡張性）

type MaboDofu = {
  calories: number
  spicyLevel: number
}

type Rice = {
  calories: number
  gram: number
}

type MaboDon = MaboDofu & Rice //交差型(union)

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
}

// インターフェイスの継承
interface Book {
  page: number
  title: string
}

interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}

const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
}

type BookType = {
  page: number
  title: string
}

interface Handbook extends BookType {
  theme: string
}

const cotrip: Handbook = {
  page: 120,
  title: 'ことりっぷ',
  theme: '旅行',
}

// implementsを使ってclassに型定義する
class Comic implements Book {
  page: number
  title: string

  constructor(page: number, title: string, private publishYear: string) {
    this.page = page
    this.title = title
  }
  // メソッド
  getPublishYear() {
    return this.title + 'が発売されたのは' + this.publishYear + '年です'
  }
}

const populerComic = new Comic(200, '鬼滅の刃', '2014年')
console.log(populerComic.getPublishYear())

export default function typeAliasSample() {
  // 型エイリアス 再利用
  // 同じ型を何度も定義する必要がない
  // 型に名前を付けることで変数の役割を明確化
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japan',
    name: 'Japan',
  }

  console.log('typeAliasSample 1:', japan)

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'United States of America',
  }
  console.log('typeAliasSample 2:', america)

  // 合併型(union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }
  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型...KnightまたはWizardの型を持ちますよ
  type Adventure = Knight | Wizard

  // 交差型...KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard

  // Knight寄りの冒険者
  const adventure1: Adventure = {
    hp: 100,
    sp: 200,
    weapon: '木の杖',
    swordSkill: '三連斬り',
  }

  // Wizard寄りの冒険者
  const adventure2: Adventure = {
    hp: 100,
    mp: 50,
    weapon: '水',
    magicSkill: 'ファイヤーボール',
  }
  console.log('typeAliasSample 3:', adventure1)
  console.log('typeAliasSample 4:', adventure2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連斬り',
    magicSkill: 'ファイヤーボール',
  }

  console.log('typeAliasSample 5:', paladin)
}

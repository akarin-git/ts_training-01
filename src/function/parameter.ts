// パラメーターを持つ関数
// ?(オプショナル) = 入ってこない場合もある
// export const isUserSigndIn = (userId: string, username?: string): boolean => {
//     if (userId === "ABC") {
//         console.log("FunctionParameterSample 1, User is signed in! Username is ", username)
//         return true
//     } else {
//         console.log("FunctionParameterSample 2, User is not signed in!")
//         return false
//     }
// }

// デフォルトのパラメーターを設定 (usernameが入ってこなかったらNO NAMEを出す)
export const isUserSigndIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('FunctionParameterSample 1, User is signed in! Username is ', username)
    return true
  } else {
    console.log('FunctionParameterSample 2, User is not signed in!')
    return false
  }
}

// レストパラメーター
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}

// import World from './world'

// const root: HTMLElement | null = document.getElementById('root')
// const world = new World('Hello World')
// world.sayHallo(root)

// 基本方定義練習
// import { unknownSample, anySample, notExistSample, primitiveSample } from './basic'

// unknownSample()
// anySample()
// notExistSample()
// primitiveSample()

// 関数の型定義
// import { logMessage , logMessage2, logMessage3, logMessage4, alwaysThrowError} from "./function/basic";
// import { logMessage , logMessage2, logMessage3, logMessage4, alwaysThrowError, logMessage6, logMessage7} from "./function/basic";
// import { logMessage6, logMessage7 } from './function/basic'
// import { isUserSigndIn } from "./function/parameter"
// import { isUserSigndIn2, sumProductsPrice } from './function/parameter'

// logMessage("Hello World1")
// logMessage2("Hello World2")
// logMessage3("Hello World3")
// logMessage4("Hello World4")
// alwaysThrowError("Errorですよ")

// logMessage6('Hello World6')
// logMessage7('Hello World7')

// isUserSigndIn( "ABC", "akari")
// isUserSigndIn( "CAB", "akari2")
// isUserSigndIn2('ABC')

// レストパラメーター
// const sum = sumProductsPrice(100, 200, 300, 400, 500)
// console.log('FunctionParameterSample 3,', sum)

// オブジェクトの型定義
import objectSample from './object/object'

// objectSample()

// オブジェクトの型定義
// import typeAliasSample from './object/alias'

// typeAliasSample()

import arraySample from './array/array'

arraySample()

import tupleSample from './array/tuple'

tupleSample()

// ジェネリック型
import genericsBasicSample from './generics/basic'

genericsBasicSample()

import genericsAdvancedSample from './generics/advanced'

genericsAdvancedSample()

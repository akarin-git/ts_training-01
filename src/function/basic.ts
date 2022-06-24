// アロー関数
// export const logMessage = (message: string): void => {
//     console.log('FunctionSample 1:', message)
// }

// 名前付き関数
export function logMessage2(message: string): void {
  console.log('FunctionSample 2:', message)
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log('FunctionSample 3:', message)
}

// アロー関数省略
export const logMessage4 = (message: string): void => console.log('FunctionSample 4:', message)

export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

// 呼び出しシグネチャー(省略記法)
type LogMessage = (message: string) => void
export const logMessage6: LogMessage = (message) => {
  console.log('FunctionSample 6:', message)
}

// 完全なる呼び出しシグネチャー
type FullLogMessage = {
  (message: string): void
}

export const logMessage7: FullLogMessage = (message) => {
  console.log('FunctionSample 7:', message)
}

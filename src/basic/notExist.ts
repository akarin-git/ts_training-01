export default function notExistSample() {
  const name = null
  // console.log("notExistSample 1:", typeof name,name)

  // name = "akari"
  if (!name) {
    // console.log("notExistSample 2:", "我輩はまだ" +name)
  } else {
    // console.log("notExistSample 3:", "我輩は" +name+ "である")
  }

  let age = undefined
  // console.log("notExistSample 4:", typeof age, age)

  age = 28

  if (!age) {
    // console.log("notExistSample 5:", "年齢は秘密です")
  } else {
    // console.log("notExistSample 6:", "年齢は" + age + "です")
  }
}

const checkFirst = (str) => {
  return !str[0].match(/[^\d()]/g);
}

const checkPara = (str) => {
  const para = str.match(/[()]/g);
  const firstPara = str.match(/[(]/);
  const secondPara = str.match(/[)]/);
  if(firstPara == null && secondPara == null) {
    return true;
  } else {
    return (para.length === 2) && (secondPara["index"]-firstPara["index"] === 4);
  }
}

const checkHyphens = (str) => {
  const hyphens = str.match(/\-/g)
  return hyphens === null || hyphens.length <= 2
}

const telephoneCheck = (str) => {

  const numbers = str.split('').filter(char => char.match(/[0-9]/g));

  return (numbers.length === 10 ||
  (numbers.length === 11 && numbers[0] == "1")) &&
  (
    checkFirst(str) &&
    checkPara(str) &&
    checkHyphens(str)
  )
}

// const tests = [
//   "555-555-5555",
//   "(555)555-5555",
//   "(555) 555-5555",
//   "555 555 5555",
//   "5555555555",
//   "1 555 555 5555",
// ]

// tests.forEach(test => console.log(telephoneCheck(test)))

const checkFirst = (str) => {
  return !str[0].match(/[^\d()]/g);
}

const checkPara = (str) => {
  let para = str.match(/[()]/g);
  let firstPara = str.match(/[(]/);
  let secondPara = str.match(/[)]/);
  if(firstPara == null && secondPara == null) {
    return true;
  } else {
    return (para.length === 2) && (secondPara["index"]-firstPara["index"] === 4);
  }
}

const checkHyphens = (str) => {
    let hyphens = str.match(/\-/g)
    return hyphens === null || hyphens.length <= 2
  }

const telephoneCheck = (str) => {

  let newStr = "";

  for(let i = 0; i < str.length; i++) {
    if(str[i].match(/[0-9]/g)){
      newStr += str[i];
    }
  }

  if(newStr.length === 10) {
    return (
      checkFirst(str) &&
      checkPara(str) &&
      checkHyphens(str)
    )
  } else if(newStr.length === 11) {
    if(newStr[0] == "1") {
      return (
          checkFirst(str) &&
          checkPara(str) &&
          checkHyphens(str)
      )
    } else {
      return false;
    }
  }
}

const tests = [
  "555-555-5555",
  "(555)555-5555",
  "(555) 555-5555",
  "555 555 5555",
  "5555555555",
  "1 555 555 5555",
]

tests.forEach(test => console.log(telephoneCheck(test)))

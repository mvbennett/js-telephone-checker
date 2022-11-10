const checkFirst = (str) => {
  return !str[0].match(/[^\d()]/g);
}

const checkPara = (str) => {
  let para = str.match(/[()]/g);
  let firstPara = str.match(/[(]/);
  let secondPara = str.match(/[)]/);
  if(para == null) {
    return true;
  }
  else if(para.length !== 2){
    return false;
  } else if(secondPara["index"]-firstPara["index"] !== 4){
    return false;
  } else if(para = null){
    return true;
  }
  return true;
}

const checkHyphens = (str) => {
    let hyphens = str.match(/\-/g)
    if(hyphens == null){
      return true;
    } else if(hyphens.length > 2) {
      return false;
    }
    return true;
  }

const telephoneCheck = (str) => {

  let newStr = "";

  for(let i = 0; i < str.length; i++) {
    if(str[i].match(/[0-9]/g)){
      newStr += str[i];
    }
  }

  if(newStr.length > 11 || newStr.length < 10){
    return false;
  }


  if(newStr.length == 10) {
    if(
    checkFirst(str) &&
    checkPara(str) &&
    checkHyphens(str)) {
      return true
    }
    return false;
  }
  else if(newStr.length === 11){
    if(newStr[0] == "1") {
      if(
        checkFirst(str) &&
        checkPara(str) &&
        checkHyphens(str)
        ) {
          return true
      }
      return false;
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

let pattern = 'pw'

let regExOne = new RegExp(pattern)

let flag = 'gi'

let regExTwo = new RegExp(pattern, flag)

let regExThree = /pw/gi

let strtToCheck = "pw is growing at a rapid speed and recently they are working on pwskills to create skills based  PWcontent"

let result = regExThree.test(strtToCheck)
console.log(result);

let anotherResult = strtToCheck.match(regExThree)
console.log(anotherResult);

let oneMoreResult = strtToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult);


let webUrl = "https://pwskills.com/ravi%53yadav"
// let useableUrl = webUrl.replace(/%20/, '-')
let useableUrl = webUrl.replace(/%\d\d/, '-')
console.log(useableUrl);


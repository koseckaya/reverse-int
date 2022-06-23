module.exports = function reverse(n) {

    let strNum = String(Math.abs(n))
    let arrStr = strNum.split("")
    let reverseArr = arrStr.reverse()
    let arrToStr = reverseArr.join('')
    let strToNum = +arrToStr

    return strToNum
}


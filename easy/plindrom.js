const isPalindrome = (x) => {
    const temp = []
    const convertedNum = x.toString()
    for (let i = 0; i < convertedNum.length; i++) {
        temp.unshift(convertedNum[i])
    }
    const jonNum = temp.join("")
    if (convertedNum === jonNum) {
        return true
    }
    return false
}


console.log(isPalindrome(-121))

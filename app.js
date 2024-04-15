let listName = ['john', 'eve', 'doe', 'briant']
let listNumbers = [2.3, 4.12, 56.9, 7.6, 2.3, 57.6, 8.2]

for (index of listNumbers) {
    num1 = 23
    num2 = 34
    calcul = index * num1
    someMathCeil = Math.ceil(calcul)
    randomVariable = Math.random(someMathCeil)
    console.log("this is the final piece of people :" + randomVariable)
}
console.log('--------------------')
storage = []
let guyFunction = () => {

    for (let i = 0; i < listNumbers.length; i++) {
        let sumOfProducts = listNumbers[i] + listNumbers[i]

        storage.push(sumOfProducts)
    }
    return { storage1: storage[1] }
}


// console.log(guyFunction())


const sumArray = (numbers) => {
    let result = 0
    for (const num of numbers) {
        console.log(num)
        result = result + num
    }
    return { result: result }
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumArray(nums))


const max = (numbers) => {
    let result = numbers[0]

    for (const number of numbers) {
        if (number > result) {
            result = number
        }
    }
    return result
}
let arrNumber = [1, 2, 3, 5, 4]
    // console.log(max(arrNumber))
    // console.log(arrNumber)

const frequence = (myArray) => {
    let frequence = {}
    myArray.split(' ')
    for (const letter of myArray) {

        if (letter in frequence) {

            frequence[letter] += 1
        } else {
            frequence[letter] = 1
        }
    }
    return frequence
}

let print = frequence([3, 4, 5, 6, 2, 23, 5, 6, , 3, 23, 4, 5, 575])
    // console.log(print)




const wordFrequency = (phrase) => {
    let frequency = {}
    words = phrase.split(' ')
    console.log(words)
    for (const word of words) {
        console.log(word)
        if (word in frequency) {
            frequency[word] += 1

        } else {
            frequency[word] = 1
        }
    }
    return frequency
}

// wordFrequency('John rocky blood rick blood john')

let listNumber = [23, 4, 5, 23, 3, 554]
const doubleMap = (numbers) => {
    return numbers.map(number => number * 2)
}

// console.log(doubleMap(listNumber))

let actors = [
    { name: 'turolien', age: 3, address: 'kilubla' },
    { name: 'rocky', age: 43, address: 'malaki' },

    { name: 'rocky', age: 43, address: 'malaki' },
    { name: 'rocky', age: 43, address: 'malaki' },

]
let reduceLess = actors.reduce((prev, curr) => prev + curr.age, 10);
// console.log(reduceLess)



const fibWithMemo = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}

// // console.log(fibWithMemo(6))
// // console.log(fibWithMemo(7))
// // console.log(fibWithMemo(8))
// // console.log(fibWithMemo(1000))

const fib = (n) => {
        if (n <= 2) return 1
        return fib(n - 1) + fib(n - 2)
    }
    // console.log(fib(6))
    // console.log(fib(7))
    // console.log(fib(8))
    // console.log(fib(1000))

const griTraveler = (m, n, memo = {}) => {
    const key = m + "," + n
    if (key in memo) return memo[key]
    if (m === 1 && n === 1) return 1
    if (m === 0 || n === 0) return 0

    memo[key] = griTraveler(m - 1, n, memo) + griTraveler(m, n - 1, memo)
    return memo[key]
}

// console.log(griTraveler(5, 10))

const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSum(remainder, numbers, memo)
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num]
            return memo[targetSum]
        }
    }
    memo[targetSum] = null
    return null
}

// console.log(howSum(92, [23, 546]))

const bestSum = (targetSum, numbers, memo = {}) => {
        if (targetSum in memo) return memo[targetSum]
        if (targetSum === 0) return []
        if (targetSum < 0) return null

        let shortTestCombination = null

        for (let num of numbers) {
            const remainder = targetSum - num
            const remainderCombination = bestSum(remainder, numbers, memo)
            if (remainderCombination !== null) {
                const combination = [...remainderCombination, num]
                if (shortTestCombination === null || combination.length < shortTestCombination) {
                    shortTestCombination = combination
                }
            }

        }
        memo[targetSum] = shortTestCombination
        return shortTestCombination
    }
    // console.log(bestSum(80, [895, 3, 4]))

const canConstruct = (target, wordBank, memo = {}) => {
        if (target in memo) return memo[target]
        if (target === "") return true
        for (let word of wordBank) {
            if (target.indexOf(word) === 0) {
                const suffix = target.slice(word.length)
                if (canConstruct(suffix, wordBank, memo) === true) {
                    memo[target] = true
                    return true
                }
            }

        }
        memo[target] = false
        return false
    }
    // console.log(canConstruct('eeeeeeeeeef', ['ee',
    //     'eeeeeeee',
    //     'eeeeeeeeeeee',
    //     'eeeeeeeeeeeeeeee',
    //     'eeeeeeeeeeeeeeeeeeeeeeee'
    // ]))
const countConstruct = (target, wordBank, memo = {}) => {
        if (target in memo) return memo[target]
        if (target === "") return 1
        let totalCount = 0
        for (let word of wordBank) {
            if (target.indexOf(word) === 0) {
                const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo)
                totalCount += numWaysForRest
            }

        }
        memo[target] = totalCount
        return totalCount
    }
    // console.log(countConstruct('eeeeeeeeeef', ['ee',
    //     'eeeefeeee',
    //     'eeeeeeeeeefe',
    //     'eeeeeeeeeeeeeeeef',
    //     'eeeeeeeeeeeeefeeeeeeefeeee'
    // ]))

const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === '') {
        return [
            []
        ]
    }
    const result = []

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = (word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo)
            const targetWays = suffixWays.map(way => [word, ...way])
            result.push(...targetWays)
        }
    }
    memo[target] = result
    return result
}

// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
//GRIG VIEW
const gridTraveler = (m, n) => {
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0))

    table[1][1] = 1
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j]
            if (j + 1 <= n) table[i][j + 1] += current
            if (i + 1 <= m) table[i + 1][j] += current
        }
    }
    return table[m][n]
}

// console.log(gridTraveler(1, 1))
// console.log(gridTraveler(2, 3))
// console.log(gridTraveler(3, 2))
// console.log(gridTraveler(3, 3))
// console.log(gridTraveler(18, 18))

const canSum = (targetSum, numbers) => {
        const table = Array(targetSum + 1).fill(false)
        table[0] = true

        for (let i = 0; i <= targetSum; i++) {
            if (table[i] === true) {
                for (let num of numbers) {
                    table[i + num] = true
                }
            }
        }
        return table[targetSum]
    }
    // console.log(canSum(7, [1, 2]))
    // console.log(canSum(7, [5, 3, 5, 7]))
    // console.log(canSum(7, [2, 4]))
    // console.log(canSum(8, [2, 3, 5]))

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null)
    table[0] = []

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [...table[i], num]
            }
        }
    }
    return table[targetSum]
}

// console.log(howSum(7, [2, 3]))
// console.log(howSum(7, [2, 4]))
const bestSum = (targetSum, numbers) => {
        const table = Array(targetSum + 1).fill(null)
        table[0] = []

        for (let i = 0; i <= targetSum; i++) {
            if (table[i] !== null) {
                for (let num of numbers) {
                    combination = [...table[i], num]
                    if (!table[i + num] || table[i + num].length > combination.length) {
                        table[i + num] = combination
                    }
                }
            }
        }
        return table[targetSum]
    }
    // console.log(bestSum(7, [5, 3, 4, 7]))
    // console.log(bestSum(8, [2, 3, 5]))
    // console.log(bestSum(100, [1, 2, 5, 25]))

const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false)
    table[0] = true

    for (let i = 0; i <= target.length; i++) {
        if (target[i] === true) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true
                }
            }
        }

    }
    return table[target.length]
}

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
// console.log(canConstruct("skateboard", ['boo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
// console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'ot', 'o', 't']))
// console.log(canConstruct('guy', ['g', 'y', 'u', 'o']))
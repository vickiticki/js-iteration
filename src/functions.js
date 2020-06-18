/*

   Welcome to JS Interation

   Down below you will find instructions for code to write.

   As you write and save your code, you can look in your terminal where you
   ran `yarn test` to see if your code is working. The tests continuously check
   your work each time you save. If a test is failing either you have not yet
   defined that function or you have not defined it correctly.

   Once you finish a function and have it correct, the test will tell you if/how
   the next function is working.

*/

/**
 * 1) Define a function named `yelling` that takes an array of
 * strings as an argument and returns a new array with all
 * the words forced to uppercase
 *
 */

const yelling = words => {
  // Your code here
}

/**
 *
 * 2) Define a function named `doubleTrouble` that takes an array of
 * numbers as an argument and returns a new array with all
 * the numbers multiplied by 2
 */

// ...

/*
 * 3) Define a function stringyIndexes() that takes an array of
 * strings as an argument and returns a new array with each string
 * suffixed with " is at index X" where X is the index of the element
 */

// ...

/*
 * 4) Define a function onlyTheEvenSurvive that accepts an array of
 * numbers and returns only the elements that are even
 */

// ...

/*
 * 5) Define a function onlyTheEvenIndexedSurvive that accepts an array of
 * numbers and returns only the elements at indexes that are even
 */

// ...

/*
 * 6)  Define a function bestMoviesOfTheYear that accepts an array of
 * movie objects AND a year and returns the names of movies that are
 * from that year AND have a score more than 90
 *
 * A movie object looks like this:
 *
 * {
 *   name: "Get Out",
 *   year: "2017",
 *   score: 99
 * }
 */

// ...

/*
 * 7) Define a function everyoneIsOdd that accepts an array of
 * numbers and returns true if every element of the array is
 * odd.
 */

// ...

/*
 * 8) Define a function findTheNeedle that accepts an array of
 * strings and returns the one string that contains the word
 * `needle` inside
 */

// ...

/*
 * 9) Define a function findTheNeedleIndex that accepts an array of
 * strings and returns the index of the string that contains
 *  the word `needle` inside
 */

// ...

/*
 *` 10)  Define a function someoneToLove that accepts an array of
 * strings and returns true if at least one string is exactly
 * four characters long
 */

// ...

/*
 * 11) Define a function mapYourself that accepts an array of
 * numbers and returns a new array where each number is doubled.
 *
 * However, you cannot use any of the Array enumerables.
 *
 * So no using forEach, map, filter, reduce, etc.
 */

// ...

/*
 * 12) Define a function filterYourself that accepts an
 * array of numbers and returns a new array containing
 * only the even numbers.
 *
 * However, you cannot use any of the Array enumerables.
 *
 * So no using forEach, map, filter, reduce, etc.
 */

// ...

/*
 * 13) Define a function everyYourself that accepts an
 * array of numbers and returns true if every number
 * in the array is even.
 *
 * However, you cannot use any of the Array enumerables.
 *
 * So no using forEach, map, filter, reduce, etc.
 */

// ...

/**
 * NOTE: Don't modify anything below this line...
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * NOTE: Don't modify anything below this line...
 */

const deepEqual = require('deep-equal')
const chalk = require('chalk')

const isDefined = method => {
  return eval(`typeof ${method}`) === 'function'
}

const compare = (received, expected) => {
  if (deepEqual(received, expected)) {
    return ''
  } else {
    return `Received: ${JSON.stringify(received)} but expected ${JSON.stringify(
      expected
    )}`
  }
}

const tests = [
  {
    methodName: 'yelling',
    test: () => {
      const received = yelling(['now', 'is', 'the', 'time'])
      const expected = ['NOW', 'IS', 'THE', 'TIME']

      return compare(received, expected)
    }
  },
  {
    methodName: 'doubleTrouble',
    test: () => {
      return compare(doubleTrouble([2, 3, 9, 0, -5]), [4, 6, 18, 0, -10])
    }
  },
  {
    methodName: 'stringyIndex',
    test: () => {
      return compare(stringyIndexes(['how', 'now', 'brown', 'cow']), [
        'how is at index 0',
        'now is at index 1',
        'brown is at index 2',
        'cow is at index 3'
      ])
    }
  },
  {
    methodName: 'onlyTheEvenSurvive',
    test: () => {
      return compare(onlyTheEvenSurvive([42, 50, 100, 5, -43, 17, 44]), [
        42,
        50,
        100,
        44
      ])
    }
  },
  {
    methodName: 'onlyTheEvenIndexSurvive',
    test: () => {
      return compare(
        onlyTheEvenIndexedSurvive([
          31,
          67,
          64,
          96,
          14,
          24,
          43,
          51,
          48,
          80,
          58,
          43,
          64,
          84,
          98,
          99,
          69,
          93,
          5,
          32,
          29,
          4,
          28,
          18,
          86,
          22,
          20,
          74,
          35,
          27,
          85,
          79,
          65,
          32,
          56,
          94,
          93,
          20,
          29,
          22,
          72
        ]),
        [
          31,
          64,
          14,
          43,
          48,
          58,
          64,
          98,
          69,
          5,
          29,
          28,
          86,
          20,
          35,
          85,
          65,
          56,
          93,
          29,
          72
        ]
      )
    }
  },
  {
    methodName: 'bestMoviesOfTheYear',
    test: () => {
      const movies = [
        { name: 'The Grand Budapest Hotel', year: 2014, score: 91 },
        { name: 'Birdman', year: 2014, score: 91 },
        { name: 'Transformers: Age of Extinction', year: 2014, score: 18 },
        { name: 'Rage', year: 2014, score: 14 },
        { name: 'Get Out', year: 2017, score: 99 },
        { name: 'Justice League', year: 2017, score: 40 },
        { name: 'Ghost in the Shell', year: 2017, score: 46 },
        { name: 'The Big Sick', year: 2017, score: 98 }
      ]
      return (
        compare(bestMoviesOfTheYear(movies, 2014), [
          'The Grand Budapest Hotel',
          'Birdman'
        ]) ||
        compare(bestMoviesOfTheYear(movies, 2017), [
          'Get Out',
          'The Big Sick'
        ]) ||
        compare(bestMoviesOfTheYear(movies, 2001), [])
      )
    }
  },
  {
    methodName: 'everyoneIsOdd',
    test: () => {
      return (
        compare(everyoneIsOdd([9, 15, 27, 101, 33]), true) ||
        compare(everyoneIsOdd([9, 23, 3, 4, 77]), false)
      )
    }
  },
  {
    methodName: 'findTheNeedle',
    test: () => {
      return compare(
        findTheNeedle(['one', 'time', 'there was a needle at', 'the market']),
        'there was a needle at'
      )
    }
  },
  {
    methodName: 'findTheNeedleIndex',
    test: () => {
      return compare(
        findTheNeedleIndex([
          'one',
          'time',
          'there was a needle at',
          'the market'
        ]),
        2
      )
    }
  },
  {
    methodName: 'someoneToLove',
    test: () => {
      return (
        comapre(someoneToLove(['how', 'now', 'brown', 'cow']), false) ||
        compare(someoneToLove(['how', 'now', 'blue', 'cow']), true)
      )
    }
  },
  {
    methodName: 'mapYourself',
    test: () => {
      return (
        compare(mapYourself([1, 2, 3]), [2, 4, 6]) &&
        compare(mapYourself([9, 0, 1]), [18, 0, 2])
      )
    }
  },
  {
    methodName: 'filterYourself',
    test: () => {
      return compare(filterYourself([8, 1, 2, 3]), [8, 2])
    }
  },
  {
    methodName: 'everyYourself',
    test: () => {
      return (
        compare(everyYourself([8, 1, 2, 3]), false) &&
        compare(everyYourself([8, 10, 22, 38]), true)
      )
    }
  }
]

const longestTestName = Math.max(...tests.map(test => test.methodName.length))

const runOneTest = testCase => {
  try {
    if (!isDefined(testCase.methodName)) {
      return 'undefined'
    }

    return testCase.test()
  } catch {
    return 'Some kind of syntax or other code error'
  }
}

let totalPassing = 0

console.clear()
tests.forEach(test => {
  const paddedTestName =
    test.methodName + ' '.repeat(longestTestName - test.methodName.length)

  const testResult = runOneTest(test)

  switch (testResult) {
    case 'undefined':
      console.log(chalk.yellow(`${paddedTestName} ⚡️⚡️ not defined️ ⚡️️⚡️`))
      break
    case '':
      totalPassing++
      console.log(chalk.green(`${paddedTestName} pass`))
      break
    default:
      console.log(chalk.red(`${paddedTestName} ${testResult}`))
      break
  }
  console.log()
})

console.log('\n\n')
if (totalPassing === tests.length) {
  console.log(chalk.green('CONGRATULATIONS! All methods work!'))
} else {
  console.log(
    chalk.yellow(
      'At least one method is not working ... keep going. You got this!'
    )
  )
}

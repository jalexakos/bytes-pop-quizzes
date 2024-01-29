// Python has a range function that generates a sequence of numbers starting at the first argument, incrementing by the third argument, and stopping at the second argument.

// range(0, 5) // [0, 1, 2, 3, 4, 5]
// range(3, 9, 3) // [3, 6, 9]
// range(10, 50, 10) // [10, 20, 30, 40, 50]
// How would you recreate this in JavaScript?

function range(start: number, finish: number, step: number = 1): Array<number> | Error{
    let answer = [];
    if (start < finish && step > 0){
        for (let i = start; i <= finish; i += step){
            answer.push(i);
        }
    } else if (start > finish && step < 0) {
        for (let i = start; i >= finish; i -= step) {
            answer.push(i)
        }
    } else if (start === finish) return new Error('The start and finish values are equal. There is no range between them.');
    else return new Error('There is something wrong with your input(s). Check if the step aligns with the range (e.g. if you want to go from 1 to 5, the step can\' be -1).');

    return answer;
}

console.log(range(0, 5)) // [0, 1, 2, 3, 4, 5]
console.log(range(3, 9, 3)) // [3, 6, 9]
console.log(range(10, 50, 10)) // [10, 20, 30, 40, 50]
// console.log(range(1,5,-1)); // Errors out correctly

// Bytes solution
const bytesRange = (start: number, stop: number, step:number =1) => {
    return Array.from(
      { length: (stop - start) / step + 1 },
      (value, i) => start + i * step
    )
  }


  console.log(bytesRange(0, 5)) // [0, 1, 2, 3, 4, 5]
  console.log(bytesRange(3, 9, 3)) // [3, 6, 9]
  console.log(bytesRange(10, 50, 10)) // [10, 20, 30, 40, 50]
console.log(bytesRange(1,5,-1)); // Returns an empty array. That's good.
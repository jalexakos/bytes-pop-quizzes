// from https://bytes.dev/archives/263

let seats = [
    [1, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 0],
  ];
  
  function reserveFirstAvailableSeat(seats: Array<Array<number>>) {
    for (let i = 0; i < seats.length; i++) {
      for (let j = 0; j < seats[i].length; j++) {
        if (seats[i][j] === 0) {
          seats[i][j] = 1; // Reserve the seat
          console.log(`Reserved seat at row ${i + 1}, column ${j + 1}`);
          break;
        }
      }
    }
  }
  
  reserveFirstAvailableSeat(seats);

// I suspect that the issue is that the break will only break the inner for loop.
// You need to return or label the for loops, and specify you are breaking the outer for loop.

// from Bytes:

// The code ends up making 3 reservations instead of 1. 
// This is because the break statement only breaks out of the inner loop, not the outer loop.
// To fix this, you can replace the break statement with a return statement.
  
  function reserveFirstAvailableSeatWithReturn(seats: Array<Array<number>>) {
    for (let i = 0; i < seats.length; i++) {
      for (let j = 0; j < seats[i].length; j++) {
        if (seats[i][j] === 0) {
          seats[i][j] = 1; // Reserve the seat
          console.log(`Reserved seat at row ${i + 1}, column ${j + 1}`);
          return;
        }
      }
    }
  }
  
  reserveFirstAvailableSeatWithReturn(seats);

// Alternatively, you can use labeled statements 
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)
// to explicitly break out of the outer loop:

function reserveFirstAvailableSeatWithLabels(seats: Array<Array<number>>) {
    rows: for (let i = 0; i < seats.length; i++) {
      columns: for (let j = 0; j < seats[i].length; j++) {
        if (seats[i][j] === 0) {
          seats[i][j] = 1; // Reserve the seat
          console.log(`Reserved seat at row ${i + 1}, column ${j + 1}`);
          break rows;
        }
      }
    }
  }
  
  reserveFirstAvailableSeatWithLabels(seats);
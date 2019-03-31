/**
 * Author:              Ajaegbu Shedrack
 * Email:               shedrack3@gmail.com
 * Phone:               +2348065172295
 *====================================================================================
 * Project:             Andela Nigeria Cycle 44 Technical Challenge (Interview code)
 * Date:                29th March, 2019.
 * Descriptioin:        Make use of only HTML, CSS and JavaScript, and NO FRAMEWORKS
 *                      to attempt any of the coding questions/Challenge.
 *=====================================================================================
 * Choosen Question:    Question 1
 * Context:             In a concert hall, some seats are higher than others,
 *                      such that a seat can only see the stage if the seat
 *                      in front of it is lower. Your task is to find the seats
 *                      that can see the stage and those that cannot.
 */

/**
 * @function checkEquality
 * @description loop through an array of numbers and
 * check the equality of the numbers.
 * @param {number} nums.
 *@returns array
 */
const checkEquality = (...nums) => {
  // Get the seats that complies
  const compliantNums = [];
  // Holds the seats that do not complies
  const defaultNums = nums.filter ((val, id, arr) => {
    if (val >= arr[id + 1]) return val >= arr[id + 1];
    else compliantNums.push (val);
  });
  // Further reiterate and refine the seats that complies
  const compliant = () => {
    compliantNums.map ((val, id, arr) => {
      if (val >= arr[id + 1]) {
        compliantNums.splice (arr.indexOf (val), 1);
        defaultNums.push (val);
      }
    });
  };
  // Remove any more remaining defaulting seats from the compliant ones.
  for (let i = 0; i < compliantNums.length; i++) {
    compliant ();
  }
  return defaultNums;
};

/**
 * @function concertSeats
 * @description Determines whether each seat (represented with a number)
 * can "see" the front-stage. A number can "see" the front-stage if
 * it is stricly greater than the number before it.
 * @param {number} seats
 * @returns object
 */
const concertSeats = seats => {
  // Holds an empty array for compliant seats and non-empty for non-complaint seats.
  const filter = [];
  filter.push (checkEquality (...seats));

  /**
   * Verify that all the seats in the filter can
   * see if and only if their lenght property is 0.
   */
  let test = false; // Marks the seats that pass and those that fail the test.
  const failTest = []; // Holds reference to the seats that prevents other seats from seeing the "front-stage".
  for (let seats of filter) {
    if (seats.length > 0) {
      test = false;
      // Go even futher to get the individual seats.
      for (let seat of seats) {
        failTest.push (seat);
      }
    } else {
      test = true;
    }
  }
  // Returns an object with the test and failTest properties.
  return {
    test,
    failTest,
  };
};

/**
 * @function evaluateResult
 * @description Gets the result of all the evaluated seats
 * and assign the pass or fail class to them according their results.
 * @param {array} results
 */
const evaluateResult = results => {
  for (let i = 0; i < results.length; i++) {
    switch (i) {
      // Evaluation for the first column
      case 0:
        const col1 = [...document.querySelectorAll ('.c1')];
        // The seats pass the test if the result test is true.
        if (results[0].test === true) {
          col1.map (val => {
            val.classList.add ('pass');
            val.classList.remove ('fail');
          });
        } else {
          // if test is false, go over the individual defaulting seat
          // and assign fail to them
          results[0].failTest.map (val => {
            col1.map (el => {
              if (val === parseInt (el.value)) {
                el.classList.add ('fail');
              } else {
                el.classList.add ('pass');
              }
            });
          });
        }
        break;
      // Evaluation for the second column
      case 1:
        const col2 = [...document.querySelectorAll ('.c2')];
        // The seats pass the test if the result test is true.
        if (results[1].test === true) {
          col2.map (val => {
            val.classList.add ('pass');
            val.classList.remove ('fail');
          });
        } else {
          // if test is false, go over the individual defaulting seat
          // and assign fail to them
          results[1].failTest.map (val => {
            col2.map (el => {
              if (val === parseInt (el.value)) {
                el.classList.add ('fail');
              } else {
                el.classList.add ('pass');
              }
            });
          });
        }
        break;
      // Evaluation for the third column
      case 2:
        const col3 = [...document.querySelectorAll ('.c3')];
        // The seats pass the test if the result test is true.
        if (results[2].test === true) {
          col3.map (val => {
            val.classList.add ('pass');
            val.classList.remove ('fail');
          });
        } else {
          // if test is false, go over the individual defaulting seat
          // and assign fail to them
          results[2].failTest.map (val => {
            col3.map (el => {
              if (val === parseInt (el.value)) {
                el.classList.add ('fail');
              } else {
                el.classList.add ('pass');
              }
            });
          });
        }
        break;
      // Evaluation for the fourth column
      case 3:
        const col4 = [...document.querySelectorAll ('.c4')];
        // The seats pass the test if the result test is true.
        if (results[3].test === true) {
          col4.map (val => {
            val.classList.add ('pass');
            val.classList.remove ('fail');
          });
        } else {
          // if test is false, go over the individual defaulting seat
          // and assign fail to them
          results[3].failTest.map (val => {
            col4.map (el => {
              if (val === parseInt (el.value)) {
                el.classList.add ('fail');
              } else {
                el.classList.add ('pass');
              }
            });
          });
        }
        break;
      // Evaluation for the fifth column
      case 4:
        const col5 = [...document.querySelectorAll ('.c5')];
        // The seats pass the test if the result test is true.
        if (results[4].test === true) {
          col5.map (val => {
            val.classList.add ('pass');
            val.classList.remove ('fail');
          });
        } else {
          // if test is false, go over the individual defaulting seat
          // and assign fail to them
          results[4].failTest.map (val => {
            col5.map (el => {
              if (val === parseInt (el.value)) {
                el.classList.add ('fail');
              } else {
                el.classList.add ('pass');
              }
            });
          });
        }
        break;
      // Evaluation for the sixth column
      case 5:
        const col6 = [...document.querySelectorAll ('.c6')];
        // The seats pass the test if the result test is true.
        if (results[5].test === true) {
          col6.map (val => {
            val.classList.add ('pass');
            val.classList.remove ('fail');
          });
        } else {
          // if test is false, go over the individual defaulting seat
          // and assign fail to them
          results[5].failTest.map (val => {
            col6.map (el => {
              if (val === parseInt (el.value)) {
                el.classList.add ('fail');
              } else {
                el.classList.add ('pass');
              }
            });
          });
        }
        break;
    }
  }
};

/**
 * @function validateInput
 * @description check to ensure the user makes an input.
 * @returns {number} warning.
 */
const validateInput = () => {
  const inputs = [...document.querySelectorAll ('input')];
  let warning = 0; // counts the number of invalid inputs.
  for (let input of inputs) {
    if (input.value === '') {
      warning++;
      input.classList.add ('warning');
    } else {
      input.classList.remove ('warning');
    }
  }
  return warning;
};

/**
 * @function checkSeat
 * @description Listens for a click event and extract
 * the Seats from the DOM and check for their complaincy.
 */
const checkSeats = () => {
  const checkSeat = document.querySelector ('a.checkSeat');
  checkSeat.addEventListener ('click', () => {
    // Get all the 36 seats from the DOM
    const r1c1 = parseInt (document.querySelector ('input.r1.c1').value),
      r1c2 = parseInt (document.querySelector ('input.r1.c2').value),
      r1c3 = parseInt (document.querySelector ('input.r1.c3').value),
      r1c4 = parseInt (document.querySelector ('input.r1.c4').value),
      r1c5 = parseInt (document.querySelector ('input.r1.c5').value),
      r1c6 = parseInt (document.querySelector ('input.r1.c6').value),
      r2c1 = parseInt (document.querySelector ('input.r2.c1').value),
      r2c2 = parseInt (document.querySelector ('input.r2.c2').value),
      r2c3 = parseInt (document.querySelector ('input.r2.c3').value),
      r2c4 = parseInt (document.querySelector ('input.r2.c4').value),
      r2c5 = parseInt (document.querySelector ('input.r2.c5').value),
      r2c6 = parseInt (document.querySelector ('input.r2.c6').value),
      r3c1 = parseInt (document.querySelector ('input.r3.c1').value),
      r3c2 = parseInt (document.querySelector ('input.r3.c2').value),
      r3c3 = parseInt (document.querySelector ('input.r3.c3').value),
      r3c4 = parseInt (document.querySelector ('input.r3.c4').value),
      r3c5 = parseInt (document.querySelector ('input.r3.c5').value),
      r3c6 = parseInt (document.querySelector ('input.r3.c6').value),
      r4c1 = parseInt (document.querySelector ('input.r4.c1').value),
      r4c2 = parseInt (document.querySelector ('input.r4.c2').value),
      r4c3 = parseInt (document.querySelector ('input.r4.c3').value),
      r4c4 = parseInt (document.querySelector ('input.r4.c4').value),
      r4c5 = parseInt (document.querySelector ('input.r4.c5').value),
      r4c6 = parseInt (document.querySelector ('input.r4.c6').value),
      r5c1 = parseInt (document.querySelector ('input.r5.c1').value),
      r5c2 = parseInt (document.querySelector ('input.r5.c2').value),
      r5c3 = parseInt (document.querySelector ('input.r5.c3').value),
      r5c4 = parseInt (document.querySelector ('input.r5.c4').value),
      r5c5 = parseInt (document.querySelector ('input.r5.c5').value),
      r5c6 = parseInt (document.querySelector ('input.r5.c6').value),
      r6c1 = parseInt (document.querySelector ('input.r6.c1').value),
      r6c2 = parseInt (document.querySelector ('input.r6.c2').value),
      r6c3 = parseInt (document.querySelector ('input.r6.c3').value),
      r6c4 = parseInt (document.querySelector ('input.r6.c4').value),
      r6c5 = parseInt (document.querySelector ('input.r6.c5').value),
      r6c6 = parseInt (document.querySelector ('input.r6.c6').value);

    // save the arrays of seats in an array.
    const seats = [
      [r1c1, r2c1, r3c1, r4c1, r5c1, r6c1],
      [r1c2, r2c2, r3c2, r4c2, r5c2, r6c2],
      [r1c3, r2c3, r3c3, r4c3, r5c3, r6c3],
      [r1c4, r2c4, r3c4, r4c4, r5c4, r6c4],
      [r1c5, r2c5, r3c5, r4c5, r5c5, r6c5],
      [r1c6, r2c6, r3c6, r4c6, r5c6, r6c6],
    ];

    const results = [];
    let data = undefined;
    for (let seat of seats) {
      data = concertSeats (seat);
      results.push (data);
    }
    // Do validation here.
    const invalid = validateInput ();
    if (invalid > 0) {// There are still invalid fields.
      return; // exit;
    } else {
      // Everything is good to go.
      // Evaluate seats here
      evaluateResult (results);
    }
  });
};

// Start the app.
checkSeats ();

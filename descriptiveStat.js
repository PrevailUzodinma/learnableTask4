class DataSet {
  static calcMean(array) {
    let sum = 0;
    for (let i of array) {
      sum += i;
    }
    let mean = sum / array.length;

    return mean;
  }

  static calcMedian(array) {
    // first ensure that the array is sorted
    array = array.sort((a, b) => a - b);

    // capture the length of my array and the middle value index in variables
    let length = array.length;
    let middleIndex = Math.floor(array.length / 2);
    let median;

    //testcase, if it is an even or odd length of values, cos median would differ

    //if array length is odd
    if (length % 2 !== 0) {
      median = array[middleIndex];

      return median;
    }
    // if array length is even
    else {
      median = (array[middleIndex] + array[middleIndex - 1]) / 2;

      return median;
    }
  }

  static calcMode(array) {
    //1. create an object to hold "element : no of times it appears in array"
    let mapElements = {};
    //scan through my array
    for (let element of array) {
      //check if element (i.e key) ia already in the object
      if (mapElements[element]) {
        // if yes, add 1
        mapElements[element]++;
      } else {
        // if no, set the value to 1
        mapElements[element] = 1;
      }
    }

    //2. filter only the no of occurence into an array

    // create an array
    let mappedArray = [];

    // iterate through the object
    for (let element in mapElements) {
      // push the value of no of occurences into the array
      mappedArray.push(mapElements[element]);
    }

    //3. find the max value in the mappedArray
    let max = DataSet.maxValue(mappedArray);

    //4. get the key element that matches with the max-value
    for (let key in mapElements) {
      if (mapElements[key] === max) {
        return key;
      }
    }
  }

  static maxValue(array) {
    let max = array[0];
    for (let i of array) {
      if (max < i) {
        max = i;
      }
    }
    return max;
  }

  static minValue(array) {
    let min = array[0];
    for (let i of array) {
      if (min > i) {
        min = i;
      }
    }
    return min;
  }

  static calcRange(array) {
    let range = DataSet.maxValue(array) - DataSet.minValue(array);
    console.log(`The range of this dataset is ${range}`);

    return range;
  }

  static calcMeanDev(array) {
    // declare a sum variable and initialize to 0
    let sum = 0;
    // set a loop to sum (x- mean) for all values of x in array
    for (let x of array) {
      sum = sum + Math.abs(x - DataSet.calcMean(array));
    }

    // divide the sum by array length to get mean deviation
    let meanDev = sum / array.length;

    return meanDev;
  }

  static calcVar(array) {
    // declare a sum variable and initialize to 0
    let sum = 0;
    // set a loop to sum (x- mean) ** 2 for all values of x in array(squared difference)
    for (let x of array) {
      sum = sum + ((x - DataSet.calcMean(array)) ** 2);
    }

    // divide the sum by array length to get variance (mea of squared difference)
    let variance = sum / array.length;

    return variance;
  }
}

/* let mean = (DataSet.calcMean([1, 2, 5, 6, 7]));
console.log(`The mean of this dataset is ${mean}`);

let median = DataSet.calcMedian([6, 8, 2, 4, 8, 9, 0]);
console.log(`The median of this dataset is ${median}`)

let mode = DataSet.calcMode([6, 8, 2, 6, 6, 6, 6, 4, 8, 9, 0]);
console.log(`The mode of this dataset is ${mode}`)

let range = DataSet.calcRange([3, 5, 6, 2, 7, 9, 3])
console.log(`The range of this dataset is ${range}`); */

let meanDev = DataSet.calcMeanDev([3, 5, 6, 2, 7, 9, 3]);
console.log(`The mean deviation of this dataset is ${meanDev}`);

let variance = DataSet.calcVar([3, 5, 6, 2, 7, 9, 3]);
console.log(`The variance of this dataset is ${variance}`);

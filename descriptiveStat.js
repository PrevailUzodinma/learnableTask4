class DataSet {
  static calcMean(array) {
    let sum = 0;
    for (let i of array) {
      sum += i;
    }
    let mean = sum / array.length;

    console.log(mean);
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
      console.log(median);
      return median;
    }
    // if array length is even
    else {
      median = (array[middleIndex] + array[middleIndex - 1]) / 2;
      console.log(median);
      return median;
    }
  }

  static calcMode(array) {
    //1. create an object to hold "element : no of times it appears in array"
    mapElements = {};
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
    let max = mappedArray[0];
    for (let i of mappedArray) {
      if (max < i) {
        max = i;
      }
    }
  }
}
//DataSet.calcMean([1, 2, 5, 6, 7]);
//DataSet.calcMedian([6,8,2,4,8,9,0]);

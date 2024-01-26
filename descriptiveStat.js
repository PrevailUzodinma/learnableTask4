class DataSet {
  static calcMean(array) {
    let sum = 0;
    for (let i of array) {
      sum += i;
    }
    let mean = sum / array.length;

    console.log(`The mean is ${mean}`);
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
      console.log(`The median is ${median}`);
      return median;
    }
    // if array length is even
    else {
      median = (array[middleIndex] + array[middleIndex - 1]) / 2;
      console.log(`The median is ${median}`);
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
        console.log(`The mode is ${key}`);
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
    let min = mappedArray[0];
    for (let i of array) {
      if (min > i) {
        min = i;
      }
    }
    return min;
  }

  static calcRange(array){
    let range = DataSet.maxValue(array) - DataSet.minValue(array);
    console.log(`The range is ${range}`)
    return range;
  }
}
DataSet.calcMean([1, 2, 5, 6, 7]);
DataSet.calcMedian([6, 8, 2, 4, 8, 9, 0]);
DataSet.calcMode([6, 8, 2, 6, 6, 6, 6, 4, 8, 9, 0]);

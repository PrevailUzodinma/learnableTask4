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

  static calcMedian(array){
    // first ensure that the array is sorted
    array = array.sort((a, b) => a - b);
    
    // capture the length of my array and the middle value index in variables
    let length = array.length;
    let middleIndex = Math.floor(array.length / 2);
    let median;

    //testcase, if it is an even or odd length of values, cos median would differ

    //if array length is odd
    if (length % 2 !== 0){
        median = array[middleIndex]
        console.log(median);
        return median
    }
    // if array length is even
    else {
        median = (array[middleIndex] + array[middleIndex - 1]) / 2
        console.log(median);
        return median
    }
}

}
//DataSet.calcMean([1, 2, 5, 6, 7]);
DataSet.calcMedian([6,8,2,4,8,9,0]);

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
    
    let length = array.length;
    let middleIndex = Math.floor(array.length / 2);
    let median;
}

}
DataSet.calcMean([1, 2, 5, 6, 7]);

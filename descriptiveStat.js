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
}
DataSet.calcMean([1, 2, 5, 6, 7]);

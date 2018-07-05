function range(start, end, step){
  var rangeArray = [];
  var currentNum = start;

  if(start <= end && step > 0 && start, end, step !== undefined){

    rangeArray.push(currentNum)

    while (currentNum + step <= end){
      rangeArray.push(currentNum + step)
      currentNum = currentNum + step;
    }

    return rangeArray;
  } else {
    return [];
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, undefined));
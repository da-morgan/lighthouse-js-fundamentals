function lastIndexOf(arr, theNum){
  var lastIndex = -1;
  for(i = 0; i < arr.length; i++){
    if(arr[i] === theNum){
      lastIndex = i;
    };
  };

  return lastIndex;
};

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));
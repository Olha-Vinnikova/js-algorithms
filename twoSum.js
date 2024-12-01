const twoSum = (arr, target) => {

  for(let i=0; i<arr.length; i++) {
    let targetIndex = arr.indexOf(target-arr[i]);
    if (targetIndex > 0) {
      return [i, targetIndex]
    }
  }
}

console.log(twoSum([12,7,9,12,15,5], 12))
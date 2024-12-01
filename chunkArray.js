// chunkArray([1,2,3,4,5,6,7], 2)  Output: [[1,2], [3,4], [5,6], [7]]

const chunkArray = (arr, num) => {
  const newArr = [];
  let index = 0;
  while (index < arr.length) {
    newArr.push(arr.slice(index, index + num))
    index += num;
  }

  return newArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))
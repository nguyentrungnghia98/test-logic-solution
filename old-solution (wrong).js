function swap(arr, a,b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function rolSubArr(arr, k, start, end) {
  if (k === 1) {
      const tmp = arr[end - 1];
      for(let i = end - 1; i >= start + 1; i--) {
          arr[i] = arr[i-1];
      } 
      arr[start] = tmp;
      return;
  }
  const length = end - start;
  if (k <= length/2) {
      const endLoop = length - k - length % k;
      for(let i = start; i < endLoop; i++) {
          swap(arr, i, i+k);
      }
      console.log(JSON.stringify(arr))
      if (length % k !== 0) {
          rolSubArr(arr, length % k, endLoop, end)
      }
  } else {
      const endLoop = k + length % k;
      for(let i = end - 1; i >= endLoop; i--) {
          swap(arr,i, i-k);
      }
      console.log(JSON.stringify(arr))
      if (length % k !== 0) {
          rolSubArr(arr, length % k, start, endLoop)
      }
  }
  
  
}
function rol(arr, k) {
if (k === 1) {
  const tmp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = tmp;
} else {
  rolSubArr(arr, k, 0, arr.length)
}
}
const arr = [1,2,3,4,5,6,7,8,9,0];
const k = 3;
rol(arr, k)
console.log(JSON.stringify(arr))
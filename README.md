Solution:
```
function swap(arr, a, b) {
  const tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
}

function rol(arr, k, start = 0) {
  if (start >= arr.length - 1) return;
  const length = arr.length - start;

  if (k <= length - k) {
    const end = start + k;
    for (let i = start; i < end; i++) {
      swap(arr, i, i + k);
    }
    if (end !== start) rol(arr, k, end);
  } else {
    const numberLoop = length - k;
    const end = start + numberLoop;
    for (let i = start; i < end; i++) {
      swap(arr, i, i + k);
    }
    if (end !== start) rol(arr, k - numberLoop, end);
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const k = 3;
rol(arr, k);
console.log(arr);
```


Old solution (wrong):
```
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
      if (length % k !== 0) {
          rolSubArr(arr, length % k, endLoop, end)
      }
  } else {
      const endLoop = k + length % k;
      for(let i = end - 1; i >= endLoop; i--) {
          swap(arr,i, i-k);
      }
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
```


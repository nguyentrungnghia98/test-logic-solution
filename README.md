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



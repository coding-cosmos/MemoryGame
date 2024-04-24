export function randomInRange(n) {
  const range = [];
  while (range.length != n) {
    let index = Math.floor(Math.random() * (n + 1));
    if (!range.includes(index) && index != 0) {
      range.push(index);
    }
  }
  return range;
}


export function numberOfElement(array,value) {
  return array.filter((element) => element == value).length;
}

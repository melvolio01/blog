export const updateArr = (arr) => {
  let updatedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) updatedArr.push(arr[i])
  }
  updatedArr.push(arr[0]);
  return updatedArr;
}
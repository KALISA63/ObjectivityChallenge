function swapElements(arr, index1, index2) {
    const temp = arr[index1];
    
    arr[index1] = arr[index2];
    
    arr[index2] = temp;
    
    return arr;
}
const myArray = [1, 2, 3, 4, 5];

console.log(swapElements(myArray, 1, 3)); 

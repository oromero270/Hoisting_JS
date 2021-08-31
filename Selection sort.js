let arr1 = [5,7,3,2,9,1,4,-12,97,-129]


const selectionSort = (arr)=>{
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] =[arr[min],arr[i]]
        }
    }
    return arr;
}



console.log(selectionSort(arr1))
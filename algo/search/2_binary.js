const binarySearch = (array, item) => {
   let start = 0;
   let end = array.length - 1;

   while (start <= end) {
       const middle = Math.floor((start + end) / 2)

       if (item === array[middle]) {
           return middle
       }

       // Если элемент больше
       if (item > array[middle]) {
           // Поиск в правой части
           start = middle + 1
       }

       // Если элемент меньше
       if (item < array[middle]) {
           // Поиск в левой части
           end = middle - 1
       }
   }

   return - 1;
}


// console.log(binarySearch([2,4,6,9,12,54,78,456,1234,5674,5687], 1234))
































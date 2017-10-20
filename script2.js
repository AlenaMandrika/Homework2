function my_function (array) {

    var max = array[0];
    var maxIndex = 0;
    var water = 0;
    var sumWater = 0;

    array.forEach(function (item, i) {
        if (item >= max) {
            sumWater += water;
            water = 0;
            max = item;
            maxIndex = i;
        } else {
            water += max - item
        }
    });

    array.reverse();

    var max1 = array[0];
    var maxIndex1 = 0;
    var water1 = 0;
    array.forEach(function (item, i) {
        if (item > max1) {
            sumWater += water1;
            water1 = 0;
            max1 = item;
            maxIndex1 = i;
        } else {
            water1 += max1 - item
        }
    });
    return sumWater
}
console.log(my_function([1,2,3,4,5,6,7,8,9,0,9]));//9
console.log(my_function([4,5,6,7,8,9,10,0,10]));//10
console.log(my_function([2,6,9,14,0,14]));//14

console.log(my_function([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])); //17
console.log(my_function([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));//10
console.log(my_function([7, 0, 1, 3, 4, 1, 2, 1]));//9
console.log(my_function([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));//10
console.log(my_function([2, 2, 1, 2, 2, 3, 0, 1, 2]));//4
console.log(my_function([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]));//24
console.log(my_function([2, 2, 2, 2, 2]));//0


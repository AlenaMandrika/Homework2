
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
    max = array[array.length - 1];
    water = 0;
    for (i = array.length - 2; i >= maxIndex; i--) {
        if (array[i] >= max) {
            sumWater += water;
            water = 0;
            max = array[i];
        } else {
            water += max - array[i]
        }
    }
    return sumWater += water;
}
console.log(my_function([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])); //17
console.log(my_function([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));//10
console.log(my_function([7, 0, 1, 3, 4, 1, 2, 1]));//9
console.log(my_function([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));//10
console.log(my_function([2, 2, 1, 2, 2, 3, 0, 1, 2]));//4
console.log(my_function([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]));//24
console.log(my_function([2, 2, 2, 2, 2]));//0


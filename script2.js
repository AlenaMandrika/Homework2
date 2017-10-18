// [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
// [7, 0, 1, 3, 4, 1, 2, 1] // 9
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
// [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
// [2, 2, 2, 2, 2] // 0

var array = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6];

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

var max = array[0];
var maxIndex = 0;
var water = 0;
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
console.log(sumWater); //17


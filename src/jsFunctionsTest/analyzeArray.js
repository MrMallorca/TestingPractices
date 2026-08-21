function analyzeArray(array)
{
    const object = {
        average: findAverage(array),
        min: findMin(array),
        max: findMax(array),
        length: findLength(array)
    };

    console.log(object);

    return object;
}

function findAverage(array)
{
    let total = 0;
    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let avg = total / array.length;    

    return avg;
}

function findMin(array)
{
    return Math.min(...array);
}

function findMax(array)
{
    return Math.max(...array);
}

function findLength(array)
{
    return array.length;
}

module.exports = analyzeArray;
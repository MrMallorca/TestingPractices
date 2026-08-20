function analyzeArray()
{
    let arrayPrueba = [1,2,3,5,6,9];

    findMin(arrayPrueba);
}

function average()
{

}

function findMin(array)
{

    Array.prototype.min = function() {
    return Math.min.apply(null, this);
    };

    const min = Math.min(array);

    console.log(min);

}

function findMax(array)
{
    Array.prototype.max = function() {
    return Math.max.apply(null, this);
    };
}

function length()
{

}

analyzeArray();
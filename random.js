function random_int_array (size, min, max) {
    var i, j, number, int_array = [];

    if (size - 1 > max - min) {
        return(-1);
    }

    for (i=0; i < size; i++) {
        number = generate(min, max);
        for (j=0; j < int_array.length && int_array[j] != number; j++);
        if (j < int_array.length) {
            i--;
        } else {
            int_array.push(number);
        }
    }

    return(int_array);
}

function generate (min, max) {
    let number = Math.floor(min + Math.random() * (max + 1 - min));
    return(number);
}

export { generate, random_int_array }
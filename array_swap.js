function array_swap(arr) {
    if (((arr.length) % 2) != 0) {
        return false;
    }

    for (var i = 0; i < arr.length / 2; i++) {
        let x = arr[i];
        arr[i] = arr[i + arr.length / 2];
        arr[i + arr.length / 2] = x;
    }
    return arr;
}
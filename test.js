function removeFirstOccurrences(value) {
    const arr = value.split(',');
    console.log(arr)
    let str= arr[1]
    return str.join(' ')
}

console.log(removeFirstOccurrences('Hello, Chuck Norris!'))

const toBinary = number => {

    if(number > 0) return number.toString(2)
    return (number >>> 0).toString(2)
}

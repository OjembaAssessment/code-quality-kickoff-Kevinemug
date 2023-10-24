function calculateMatrixSum(matrix){
    return matrix.flat(Infinity).reduce((accumulator,row) => accumulator + row,0)

}
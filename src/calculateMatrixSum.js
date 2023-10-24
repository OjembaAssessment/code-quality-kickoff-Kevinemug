function calculateMatrixSum(matrix){
    return matrix.flat().reduce((accumulator,row) => accumulator + row,0)

}
// Write a function the generates a 10 X 10 multiplication table

// function multTable() {
//     let grid = [];
//     let row = [];

//     for (i = 1; i <= 10; i++) {
//         // let row = [];

//         for (j = 1; j <= 10; j++) {
//             row.push(i*j);
//         }
//         grid.push(row);
//     }
//     console.log(grid);
// }

// ES6 Syntax - Create a function that displays a 10x10 multiplication grid
let multTable = () => {
    let grid = [];

    for (i = 1; i < 11; i++) {
        let row = [];
        for (j = 1; j < 11; j++) {
            row.push(j*i);
        }
        grid.push(row);
    }
return grid;

};

module.exports = multTable;
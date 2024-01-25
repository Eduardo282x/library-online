function createData(title, author, year, amount) {
    return { title, author, year, amount };
}
    
export const rows = [
    createData('El señor de los anillos', 'J.R.R. Tolkien', '2012', 5),
    createData('La isla del tesoro', 'Robert Louis Stevenson', '2006', 1),
    createData('El código da Vinci', 'Dan Brown', '2008', 4),
    createData('Otero libri', 'J.R.R. Tolkien', '2008', 4),
    createData('nuevo libro', 'Robert Louis Stevenson', '2008', 4),
];
    
export const colmuns = [
    {
        header:'Titulo',
        column: 'title',
        type: 'string',
        filterOption: true
    },
    {
        header:'Autor',
        column: 'author',
        type: 'string',
        filterOption: true
    },
    {
        header:'Año',
        column: 'year',
        type: 'string',
        filterOption: true
    },
    {
        header:'Cantidad',
        column: 'amount',
        type: 'string',
        filterOption: false
    }
];
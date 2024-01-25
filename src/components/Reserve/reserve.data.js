function createData(title, author, year, avalible) {
    return { title, author, year, avalible };
}
    
export const rows = [
    createData('El señor de los anillos', 'J.R.R. Tolkien', '2012', true),
    createData('La isla del tesoro', 'Robert Louis Stevenson', '2006', false),
    createData('El código da Vinci', 'Dan Brown', '2008', true),
];
    
export const colmuns = [
    {
        header:'Titulo',
        column: 'title',
        type: 'string',
        filterOption: true,
    },
    {
        header:'Autor',
        column: 'author',
        type: 'string',
        filterOption: true,
    },
    {
        header:'Año',
        column: 'year',
        type: 'string',
        filterOption: true,
    },
    {
        header:'Disponible',
        column: 'avalible',
        type: 'bool',
        filterOption: false
    }
];
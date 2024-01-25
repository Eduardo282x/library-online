function createData(title, author, year) {
    return { title, author, year };
}
    
export const rows = [
    createData('Sistemas de inscripción', 'Jose Perez', '2018',),
    createData('Registro medico', 'Andres Gonzales', '2019',),
    createData('Sistema de inventario', 'Angel Lopez', '2015', ),
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
];
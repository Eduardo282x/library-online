function createData(name, lastname, identify) {
    return { name, lastname, identify};
}
    
export const rows = [
    createData('admin', 'admin', '12345678'),
    createData('Andrea', 'Carolina', '87654321'),
];
    
export const colmuns = [
    {
        header:'Nombre',
        column: 'name',
        type: 'string',
        filterOption: true,
    },
    {
        header:'Apellido',
        column: 'lastname',
        type: 'string',
        filterOption: true,
    },
    {
        header:'Cedula',
        column: 'identify',
        type: 'string',
        filterOption: true,
    },
    {
        header:'Editar',
        column: 'Edit',
        type: 'icon',
        filterOption: false,
    },
    {
        header:'Eliminar',
        column: 'Delete',
        type: 'icon',
        filterOption: false,
    },
];
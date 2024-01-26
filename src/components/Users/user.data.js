import * as yup from 'yup';

export const colmuns = [
    {
        header:'Nombre',
        column: 'Name',
        type: 'string',
        filterOption: true,
        width:350
    },
    {
        header:'Apellido',
        column: 'Lastname',
        type: 'string',
        filterOption: true,
        width:200
    },
    {
        header:'Nombre de Usuario',
        column: 'Username',
        type: 'string',
        filterOption: true,
        width:200
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


export const bodyUser= {    
    Name: '',
    Lastname: '',
    Username: '',
}

export const validationSchema = yup.object({
    Name : yup.string().required('El Nombre es requerido'),
    Lastname : yup.string().required('El Apellido es requerido'),
    Username : yup.string().required('El Nombre de usuario es requerido'),
});

export const formUser =[
    {
        label: 'Nombre',
        input: true,
        type: 'text',
        name: 'Name',
        value: '',
    },
    {
        label: 'Apellido',
        input: true,
        type: 'text',
        name: 'Lastname',
        value: '',
    },
    {
        label: 'Nombre de Usuario',
        input: true,
        type: 'text',
        name: 'Username',
        value: '',
    },
]
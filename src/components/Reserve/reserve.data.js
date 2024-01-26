import * as yup from 'yup';

export const colmuns = [
    {
        header:'Libro',
        column: 'Title',
        type: 'string',
        filterOption: true,
        width:350
    },
    {
        header:'Alumno',
        column: 'Name',
        type: 'string',
        filterOption: true,
        width:200
    },
    {
        header:'Cantidad',
        column: 'Amount',
        type: 'string',
        filterOption: false,
    },
    {
        header:'Eliminar',
        column: 'Delete',
        type: 'icon',
        filterOption: false,
    },
];


export const bodyLibrary= {    
    IdUser: '',
    IdBookTest: '',
    Amount: '',
}

export const validationSchema = yup.object({
    IdUser : yup.string().required('El titutlo es requerido'),
    IdBookTest : yup.string().required('El autor es requerido'),
    Amount : yup.string().required('El año es requerido'),
});

export const formLibrary =[
    {
        label: 'Usuario',
        select: true,
        type: 'text',
        name: 'IdUser',
        value: '',
        valueOptions: []
    },
    {
        label: 'Libro o Tesis',
        select: true,
        type: 'text',
        name: 'IdBookTest',
        value: '',
        valueOptions: []
    },
    {
        label: 'Cantidad',
        input: true,
        type: 'text',
        name: 'Amount',
        value: '',
    },
]
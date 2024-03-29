import * as yup from 'yup';

export const colmuns = [
    {
        header:'Titulo',
        column: 'Title',
        type: 'string',
        filterOption: true,
        width:350
    },
    {
        header:'Autor',
        column: 'Author',
        type: 'string',
        filterOption: true,
        width:200
    },
    {
        header:'Año',
        column: 'Age',
        type: 'string',
        filterOption: true
    },
    {
        header:'Existencia',
        column: 'Amount',
        type: 'string',
        filterOption: false
    },
    {
        header:'Disponibles',
        column: 'AmountAvalible',
        type: 'string',
        filterOption: false
    },
    {
        header:'Editar',
        column: 'Edit',
        type: 'icon',
        filterOption: false
    },
    {
        header:'Eliminar',
        column: 'Delete',
        type: 'icon',
        filterOption: false
    },
];

export const bodyBook= {    
    Title: '',
    Author: '',
    Age: '',
    Amount: '',
    IsBook: 1,
}

export const validationSchema = yup.object({
    Title : yup.string().required('El titutlo es requerido'),
    Author : yup.string().required('El autor es requerido'),
    Age : yup.string().required('El año es requerido'),
    Amount : yup.number().required('La cantidad es requerida'),
    IsBook : yup.string().required()
});

export const formBook =[
    {
        label: 'Titulo',
        input: true,
        type: 'text',
        name: 'Title',
        value: '',
    },
    {
        label: 'Autor',
        input: true,
        type: 'text',
        name: 'Author',
        value: '',
    },
    {
        label: 'Año',
        input: true,
        type: 'text',
        name: 'Age',
        value: '',
    },
    {
        label: 'Existencia',
        input: true,
        type: 'text',
        name: 'Amount',
        value: '',
    },
    // {
    //     label: 'Libro o Tesis',
    //     select: true,
    //     type: 'text',
    //     name: 'IsBook',
    //     value: '',
    // },
]
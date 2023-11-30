import { Card } from "../Shared/Card/Card";

export const Thesis = () => {
    function createData(title, author, year) {
        return { title, author, year };
    }
        
    const rows = [
        createData('Sistemas de inscripción', 'Jose Perez', '2018',),
        createData('Registro medico', 'Andres Gonzales', '2019',),
        createData('Sistema de inventario', 'Angel Lopez', '2015', ),
    ];
        
    const colmuns = [
        {
            header:'Titulo',
            column: 'title',
            type: 'string'
        },
        {
            header:'Autor',
            column: 'author',
            type: 'string'
        },
        {
            header:'Año',
            column: 'year',
            type: 'string'
        },
    ];

    return (
        <div>
            <Card title={'Tesis'} columns={colmuns} rows={rows} showTable={true}/>
        </div>
    )
}

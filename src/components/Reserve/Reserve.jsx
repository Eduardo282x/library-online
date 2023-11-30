import { Card } from "../Shared/Card/Card"

export const Reserve = () => {

    function createData(title, author, year, avalible) {
        return { title, author, year, avalible };
    }
        
    const rows = [
        createData('El señor de los anillos', 'J.R.R. Tolkien', '2012', true),
        createData('La isla del tesoro', 'Robert Louis Stevenson', '2006', false),
        createData('El código da Vinci', 'Dan Brown', '2008', true),
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
        {
            header:'Disponible',
            column: 'avalible',
            type: 'bool'
        }
    ];
        
    return (
        <div>
            <Card title={'Reservar'} columns={colmuns} rows={rows} showTable={true}/>
        </div>
    )
}

import { Card } from "../Shared/Card/Card"

export const Books = () => {
    function createData(title, author, year, amount) {
        return { title, author, year, amount };
    }
        
    const rows = [
        createData('El señor de los anillos', 'J.R.R. Tolkien', '2012', 5),
        createData('La isla del tesoro', 'Robert Louis Stevenson', '2006', 1),
        createData('El código da Vinci', 'Dan Brown', '2008', 4),

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
            header:'Cantidad',
            column: 'amount',
            type: 'string'
        }
    ];

    return (
        <div>
            <Card title={'Libros'} columns={colmuns} rows={rows} showTable={true}/>
        </div>
    )
}

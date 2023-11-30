import { Card } from "../Shared/Card/Card"

export const Users = () => {
    function createData(name, lastname, identify) {
        return { name, lastname, identify};
    }
        
    const rows = [
        createData('admin', 'admin', '12345678'),
        createData('Andrea', 'Carolina', '87654321'),
    ];
        
    const colmuns = [
        {
            header:'Nombre',
            column: 'name',
            type: 'string'
        },
        {
            header:'Apellido',
            column: 'lastname',
            type: 'string'
        },
        {
            header:'Cedula',
            column: 'identify',
            type: 'string'
        },
    ];

    return (
        <div>
            <Card title={'Usuarios'} columns={colmuns} rows={rows} showTable={true}/>
        </div>
    )
}

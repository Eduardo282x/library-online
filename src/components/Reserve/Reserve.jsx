import { Card } from "../Shared/Card/Card";
import { rows,colmuns } from './reserve.data';

export const Reserve = () => {
    return (
        <div>
            <Card title={'Reservar'} columns={colmuns} rows={rows} showTable={true}/>
        </div>
    )
}

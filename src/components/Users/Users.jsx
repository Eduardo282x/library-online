import { Card } from "../Shared/Card/Card"
import {rows,colmuns} from './user.data';

export const Users = () => {

    const getDataCard = (data) => {
        console.log(data);
    }

    return (
        <div>
            <Card title={'Usuarios'} columns={colmuns} rows={rows} showTable={true} returnData={getDataCard}/>
        </div>
    )
}

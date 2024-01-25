import { Card } from "../Shared/Card/Card";
import {rows,colmuns} from './thesis.data';

export const Thesis = () => {

    const getDataCard = (data) => {
        console.log(data);
    }

    return (
        <div>
            <Card title={'Tesis'} columns={colmuns} rows={rows} showTable={true} returnData={getDataCard}/>
        </div>
    )
}

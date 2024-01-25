import { Card } from "../Shared/Card/Card"
import {rows,colmuns} from './books.data';

export const Books = () => {

    const getDataCard = (data) => {
        console.log(data);
    }

    return (
        <div>
            <Card title={'Libros'} columns={colmuns} rows={rows} showTable={true} returnData={getDataCard}/>
        </div>
    )
}

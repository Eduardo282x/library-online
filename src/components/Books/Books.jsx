import { Card } from "../Shared/Card/Card"
import {rows,colmuns} from './books.data';

export const Books = () => {
    return (
        <div>
            <Card title={'Libros'} columns={colmuns} rows={rows} showTable={true}/>
        </div>
    )
}

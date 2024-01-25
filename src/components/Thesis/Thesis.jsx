import { Card } from "../Shared/Card/Card";
import {rows,colmuns} from './thesis.data';

export const Thesis = () => {
    return (
        <div>
            <Card title={'Tesis'} columns={colmuns} rows={rows} showTable={true}/>
        </div>
    )
}

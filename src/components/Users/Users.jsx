import { Card } from "../Shared/Card/Card";
import { useState } from "react";
import {rows,colmuns} from './user.data';
import { style,Modal,Box } from "../materialUI";

export const Users = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getDataCard = (data) => {
        console.log(data);
        if (data.action == "Add") {
            handleOpen();
        }
        if (data.action == "Edit") {
            handleOpen();
        }
    };

    return (
        <div>
            <Card title={'Usuarios'} columns={colmuns} rows={rows} showTable={true} returnData={getDataCard}/>

            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <p>Hola</p>
                </Box>
            </Modal>
        </div>
    )
}

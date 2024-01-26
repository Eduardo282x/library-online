import { Card } from "../Shared/Card/Card";
import { colmuns } from "./reserve.data";
import { useState, useEffect } from "react";
import { style, Box, Modal } from "../materialUI";
import {getDataApi} from '../../backend/BasicAxios'

export const Reserve = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [rows,setRows] = useState([]);
    
    const getThesisApi = () => {
        getDataApi('library')
        .then((data) => {
            setRows(data);
        })
        .catch(err => {console.log(err)})
    }

    useEffect(()=> {
        getThesisApi();
    }, []);
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
            {rows && rows.length > 0 ?
            <Card
                title={"Reservar"}
                columns={colmuns}
                rows={rows}
                showTable={true}
                returnData={getDataCard}
            />
            : ''
        }

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
    );
};

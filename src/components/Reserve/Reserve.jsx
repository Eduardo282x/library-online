import { Card } from "../Shared/Card/Card";
import { rows, colmuns } from "./reserve.data";
import { useState } from "react";
import { style, Box, Modal } from "../materialUI";

export const Reserve = () => {
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
            <Card
                title={"Reservar"}
                columns={colmuns}
                rows={rows}
                showTable={true}
                returnData={getDataCard}
            />

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

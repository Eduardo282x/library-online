import { Card } from "../Shared/Card/Card";
import { colmuns, validationSchema,formBook, bodyBook } from './thesis.data';
import { useState, useEffect } from "react";
import { style,Modal,Box } from "../materialUI";
import { FormGenerator } from "../Shared/FormGenerator/FormGenerator";

import {getDataApi, postDataApi} from '../../backend/BasicAxios'

export const Thesis = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [rows,setRows] = useState([]);
    const [actionForm, setActionForm] = useState('AddApi');
    const [bodyForm, setBodyForm] = useState(bodyBook);
    
    const getThesisApi = () => {
        getDataApi('booksthesis/thesis')
        .then((data) => {
            setRows(data);
        })
        .catch(err => {console.log(err)})
    }

    useEffect(()=> {
        getThesisApi();
    }, []);


    const getDataCard = (data) => {
        if (data.action == "Add") {
            handleOpen();
            setActionForm('AddApi');
            setBodyForm(bodyBook);
        }
        if (data.action == "Edit") {
            const bookEdit = {
                Id: data.data.Id,
                Title: data.data.Title,
                Author: data.data.Author,
                Age: data.data.Age,
                Amount: data.data.Amount,
                IsBook: data.data.IsBook,
            }
            setActionForm('EditApi');
            setBodyForm(bookEdit);
            handleOpen();
        }
        if (data.action == "Delete") {
            const bookDelete = {Id: data.data.Id,}
            deleteThesisApi(bookDelete)
        }
        if (data.action == "AddApi") {
            addThesissApi(data.data);
            handleClose();
        }   
        if (data.action == "EditApi") {
            editThesisApi(data.data);
            handleClose();
        }
    };
    const addThesissApi = (newBook) => {
        postDataApi('booksthesis/add', newBook)
        .then((data) => {
            if(data){
                getThesisApi();
            }
        })
        .catch(err => {console.log(err)})
    };
    const editThesisApi = (updateBook) => {
        postDataApi('booksthesis/update', updateBook)
        .then((data) => {
            if(data){
                getThesisApi();
            }
        })
        .catch(err => {console.log(err)})
    };
    const deleteThesisApi = (idBody) => {
        postDataApi('booksthesis/delete', idBody)
        .then((data) => {
            if(data){
                getThesisApi();
            }
        })
        .catch(err => {console.log(err)})
    };

    return (
        <div>
            {rows && rows.length > 0 ?
                <Card title={'Tesis'} columns={colmuns} rows={rows} showTable={true} returnData={getDataCard}/>
                : ''
            }

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormGenerator
                        title={actionForm == 'AddApi' ? 'Agregar Tesis' : 'Actualizar Tesis'}
                        dataForm={formBook}
                        bodySend={bodyForm}
                        action={actionForm}
                        validationSchema={validationSchema}
                        sendFather={getDataCard}
                    />
                </Box>
            </Modal>
        </div>
    )
}

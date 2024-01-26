import { Card } from "../Shared/Card/Card"
import { colmuns, validationSchema,formBook, bodyBook } from './books.data';
import { useEffect, useState } from "react";
import { style,Modal,Box } from "../materialUI";
import { getDataApi, postDataApi } from '../../backend/BasicAxios';
import { FormGenerator } from "../Shared/FormGenerator/FormGenerator";

export const Books = () => {
    const [open, setOpen] = useState(false);
    const [rows,setRows] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [actionForm, setActionForm] = useState('AddApi');
    const [bodyForm, setBodyForm] = useState(bodyBook);

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
            deleteBooksApi(bookDelete)
        }
        if (data.action == "AddApi") {
            addBooksApi(data.data);
            handleClose();
        }   
        if (data.action == "EditApi") {
            editBooksApi(data.data);
            handleClose();
        }
    };
    const addBooksApi = (newBook) => {
        postDataApi('booksthesis/add', newBook)
        .then((data) => {
            if(data){
                getBooksApi();
            }
        })
        .catch(err => {console.log(err)})
    };
    const editBooksApi = (updateBook) => {
        postDataApi('booksthesis/update', updateBook)
        .then((data) => {
            if(data){
                getBooksApi();
            }
        })
        .catch(err => {console.log(err)})
    };
    const deleteBooksApi = (idBody) => {
        postDataApi('booksthesis/delete', idBody)
        .then((data) => {
            if(data){
                getBooksApi();
            }
        })
        .catch(err => {console.log(err)})
    };

    const getBooksApi = () => {
        getDataApi('booksthesis/book')
        .then((data) => {
            setRows(data);
            return data;
        })
        .catch(err => {console.log(err)})
    }

    useEffect(()=> {
        getBooksApi();
    }, []);

    return (
        <div>
            {rows ?
                <Card title={'Libros'} columns={colmuns} rows={rows} showTable={true} returnData={getDataCard}/>
            : ''}
            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <FormGenerator
                        title={actionForm == 'AddApi' ? 'Agregar Libro' : 'Actualizar Libro'}
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

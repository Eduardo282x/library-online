import { Card } from "../Shared/Card/Card";
import { colmuns, bodyLibrary, formLibrary, validationSchema } from "./reserve.data";
import { useState, useEffect } from "react";
import { style, Box, Modal } from "../materialUI";
import { getDataApi, postDataApi } from '../../backend/BasicAxios'
import { FormGenerator } from "../Shared/FormGenerator/FormGenerator";

export const Reserve = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [rows, setRows] = useState([]);
    const [actionForm, setActionForm] = useState('AddApi');
    const [bodyForm, setBodyForm] = useState(bodyLibrary);
    const [formLibraryValues, setFormLibraryValues] = useState(formLibrary);

    const getLibraryApi = () => {
        getDataApi('library')
            .then((data) => {
                setRows(data);
            })
            .catch(err => { console.log(err) })
    }
    const getUsersApi = () => {
        getDataApi('users')
        .then((data) => {
            const userOptions = data.map(user => ({ value: user.Id, label: user.Name }));
            setFormLibraryValues(prevState => {
                const updatedFormLibraryValues = [...prevState];
                const userIndex = updatedFormLibraryValues.findIndex(item => item.name === 'IdUser');
                if (userIndex !== -1) {
                    updatedFormLibraryValues[userIndex] = {
                        ...updatedFormLibraryValues[userIndex],
                        valueOptions: userOptions
                    };
                }
                return updatedFormLibraryValues;
            });
        })
        .catch(err => { console.log(err) });
    }
    const getBooksApi = () => {
        getDataApi('booksthesis')
            .then((data) => {
                const booksOptions = data.map(book => ({ value: book.Id, label: book.Title }));
                setFormLibraryValues(prevState => {
                    const updatedFormLibraryValues = [...prevState];
                    const bookIndex = updatedFormLibraryValues.findIndex(item => item.name === 'IdBookTest');
                    if (bookIndex !== -1) {
                        updatedFormLibraryValues[bookIndex] = {
                            ...updatedFormLibraryValues[bookIndex],
                            valueOptions: booksOptions
                        };
                    }
                    return updatedFormLibraryValues;
                })
            })
            .catch(err => { console.log(err) })
    }

    useEffect(() => {
        getLibraryApi();
        getUsersApi();
        getBooksApi();
    }, []);
    const getDataCard = (data) => {
        if (data.action == "Add") {
            handleOpen();
            setActionForm('AddApi');
            setBodyForm(bodyLibrary);
        }
        if (data.action == "Delete") {
            const bookDelete = { Id: data.data.Id, }
            deleteLibraryApi(bookDelete)
        }
        if (data.action == "AddApi") {
            addLibraryApi(data.data);
            handleClose();
        }
    };

    const addLibraryApi = (newBook) => {
        postDataApi('library/add', newBook)
            .then((data) => {
                if (data) {
                    getLibraryApi();
                }
            })
            .catch(err => { console.log(err) })
    };
    const deleteLibraryApi = (idBody) => {
        postDataApi('library/delete', idBody)
            .then((data) => {
                if (data) {
                    getLibraryApi();
                }
            })
            .catch(err => { console.log(err) })
    };

    return (
        <div>
            {rows ?
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
                    <FormGenerator
                        title={actionForm == 'AddApi' ? 'Agregar Reserva' : 'Actualizar Libro'}
                        dataForm={formLibraryValues}
                        bodySend={bodyForm}
                        action={actionForm}
                        validationSchema={validationSchema}
                        sendFather={getDataCard}
                    />
                </Box>
            </Modal>
        </div>
    );
};

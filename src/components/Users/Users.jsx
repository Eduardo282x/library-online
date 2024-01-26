import { Card } from "../Shared/Card/Card";
import { useState, useEffect } from "react";
import {colmuns, bodyUser,validationSchema,formUser} from './user.data';
import { style,Modal,Box } from "../materialUI";
import {getDataApi, postDataApi} from '../../backend/BasicAxios';
import { FormGenerator } from "../Shared/FormGenerator/FormGenerator";

export const Users = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [rows,setRows] = useState([]);
    const [actionForm, setActionForm] = useState('AddApi');
    const [bodyForm, setBodyForm] = useState(bodyUser);
    
    const getThesisApi = () => {
        getDataApi('users')
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
            setBodyForm(bodyUser);
        }
        if (data.action == "Edit") {
            const bookEdit = {
                Id: data.data.Id,
                Name: data.data.Name,
                Lastname: data.data.Lastname,
                Username: data.data.Username,
            }
            setActionForm('EditApi');
            setBodyForm(bookEdit);
            handleOpen();
        }
        if (data.action == "Delete") {
            const bookUser = {Id: data.data.Id,}
            deleteUserApi(bookUser)
        }
        if (data.action == "AddApi") {
            addUserApi(data.data);
            handleClose();
        }   
        if (data.action == "EditApi") {
            editUserApi(data.data);
            handleClose();
        }
    };
    const addUserApi = (newBook) => {
        postDataApi('users/add', newBook)
        .then((data) => {
            if(data){
                getThesisApi();
            }
        })
        .catch(err => {console.log(err)})
    };
    const editUserApi = (updateBook) => {
        postDataApi('users/update', updateBook)
        .then((data) => {
            if(data){
                getThesisApi();
            }
        })
        .catch(err => {console.log(err)})
    };
    const deleteUserApi = (idBody) => {
        postDataApi('users/delete', idBody)
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
                <Card title={'Usuarios'} columns={colmuns} rows={rows} showTable={true} returnData={getDataCard}/>
                :''
            }

            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <FormGenerator
                        title={actionForm == 'AddApi' ? 'Agregar Usuario' : 'Actualizar Usuario'}
                        dataForm={formUser}
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

import * as yup from 'yup';


export const loginForm = {    
    username: '',
    password: '',

}

export const validationSchema = yup.object({
    username : yup.string().required('El usuario es requerido'),
    password : yup.string().required('La contraseña es requerido'),
});
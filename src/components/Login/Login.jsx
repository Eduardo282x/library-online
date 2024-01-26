import {FormControl,
    TextField ,
    InputAdornment,
    Icon,
    AccountCircleIcon,
    IconButton,
    VisibilityOffIcon,
    VisibilityIcon,
    Button,
} from '../materialUI';
import { useFormik } from 'formik';
import {postDataApi} from '../../backend/BasicAxios';
import {loginForm, validationSchema} from './login.data';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const formik = useFormik({
        initialValues: loginForm,
        validationSchema: validationSchema,
        onSubmit: (values) => logIn(values),
    })

    const logIn = (values) => {
        postDataApi('/authentication', values).then((data) => {
            if(data.success){
                localStorage.setItem('payload', JSON.stringify(data.userData));
                setTimeout(() => {
                    navigate("/home");
                }, 1500);
            }
        }).catch(err =>{
            console.log(err);
        });
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center text-center">
            <form onSubmit={formik.handleSubmit} className="w-[30rem] h-[40rem] bg-white rounded-3xl gap-5 flex flex-col items-center justify-center">
                <h1 className="font-semibold text-[#c8874e] text-4xl">Login</h1>

                <FormControl sx={{ m: 1, width: "80%" }} variant="outlined">
                    <TextField 
                        id="username"
                        type="text"
                        label="Usuario"
                        name="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        InputProps={{
                            endAdornment:(
                                <InputAdornment position="end">
                                <Icon>{<AccountCircleIcon />}</Icon>
                            </InputAdornment>
                            )
                        }}
                    />
                </FormControl>

                <FormControl sx={{ m: 1, width: "80%" }} variant="outlined">
                    <TextField 
                        label="Contraseña"
                        type={showPassword ? "text" : "password"}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        name="password"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </FormControl>

                <Button variant="outlined" type="submit" disabled={!formik.isValid}>
                    Iniciar Sesión
                </Button>
            </form>
        </div>
    );
};

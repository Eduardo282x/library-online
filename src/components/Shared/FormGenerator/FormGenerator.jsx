import PropTypes from "prop-types";
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Autocomplete} from '../../materialUI';
import { useFormik } from "formik";

export const FormGenerator = ({ title, dataForm, bodySend, validationSchema, action, sendFather }) => {

    const submitBtn = (values) => {
        sendFather({ action: action, data: values });
    }

    const comple = (event, value, name) => {
        formik.values[name] = value.value;
        formik.value
    }

    const formik = useFormik({
        initialValues: bodySend,
        validationSchema: validationSchema,
        onSubmit: (values) => submitBtn(values),
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="flex flex-col items-center justify-center gap-5 w-full">
                <p className="font-bold text-[20px]">{title}</p>

                {dataForm.map((formInput, index) => (
                    formInput.input ? (
                        <TextField
                            className="w-full"
                            label={formInput.label}
                            type={formInput.type}
                            key={index}
                            disabled={formInput.readOnly}
                            name={formInput.name}
                            value={formik.values[formInput.name]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched[formInput.name] && Boolean(formik.errors[formInput.name])}
                            helperText={formik.touched[formInput.name] && formik.errors[formInput.name]}
                            variant="outlined"
                        />
                    ) : formInput.select ?
                        (
                            <FormControl fullWidth key={index}>
                                <InputLabel>{formInput.label}</InputLabel>
                                <Select
                                    value={formik.values[formInput.name]}
                                    onChange={formik.handleChange}
                                    label={formInput.label}
                                    name={formInput.name}
                                >
                                    {formInput.valueOptions.map((item, index) => (
                                        <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        
                    ) : (
                        <Autocomplete
                            // disablePortal
                            freeSolo
                            onChange={(event, value) => comple(event, value, formInput.name)}
                            key={index} 
                            options={formInput.options}
                            sx={{ width: '100%' }}
                            renderInput={(params) => <TextField 
                                {...params} 
                                name={formInput.name}
                                value={formik.values[formInput.name]}
                                label={formInput.label}
                                />}
                        />
                    )
                ))}

                <Button type="submit" variant="contained" disabled={!formik.isValid} >
                    Enviar
                </Button>
            </form>
        </div>
    )
}


FormGenerator.propTypes = {
    title: PropTypes.string,
    dataForm: PropTypes.array,
    bodySend: PropTypes.object,
    sendFather: PropTypes.func,
    validationSchema: PropTypes.any,
    action: PropTypes.string
};
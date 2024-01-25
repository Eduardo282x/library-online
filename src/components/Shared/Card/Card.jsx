import PropTypes from "prop-types";
import "./card.css";
import { useNavigate } from "react-router-dom";
import {Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,DoneIcon,CloseIcon,ArrowBackIcon,IconButton,SearchIcon,InputAdornment,FormControl,OutlinedInput,InputLabel,} from '../../materialUI';

export const Card = ({ title, columns, rows, showTable }) => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }

    return (
        <div className="cardBody">
            <Paper elevation={8} className="paperContent" square={false}>
                <div className="headerContent">
                    <div className="flex items-center justify-center">
                        <IconButton onClick={back}>
                            <ArrowBackIcon/>
                        </IconButton>
                        <h1 className="text-[#c8874e] font-bold text-[20px]">{title}</h1>
                    </div>

                    {showTable ?
                    <div className="search">
                        <FormControl sx={{ width: '30vw' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Buscar</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type='text'
                                endAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon/>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>
                    : ''}
                </div>
                
                {showTable ? 
                <div className="tableContent">
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                        <TableHead>
                            <TableRow className="headerRow">
                            {columns.map((col, index) => (
                                <TableCell key={index} className="headerCol">{col.header}</TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                            <TableRow key={index}>
                                {columns.map((col, key) => (
                                <TableCell key={key}>
                                    {col.type == "string" ? row[col.column] : ""}
                                    {col.type == "bool" ? (
                                    row[col.column] == true ? (
                                        <DoneIcon color="success"/>
                                    ) : (
                                        <CloseIcon color="error"/>
                                    )
                                    ) : (
                                    ""
                                    )}
                                </TableCell>
                                ))}
                            </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                : ''}
            </Paper>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    columns: PropTypes.array,
    rows: PropTypes.array,
    showTable: PropTypes.bool
};

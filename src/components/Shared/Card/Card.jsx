import {
    DeleteIcon,
    EditIcon,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    DoneIcon,
    CloseIcon,
    ArrowBackIcon,
    IconButton,
    SearchIcon,
    InputAdornment,
    FormControl,
    OutlinedInput,
    InputLabel,
    AddIcon,
} from '../../materialUI';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { pink } from '@mui/material/colors';

import "./card.css";

export const Card = ({ title, columns, rows, showTable, returnData }) => {
    const [dataFilter, setDateFilter] = useState(rows);
    const navigate = useNavigate();
    const back = () => navigate(-1);
    const filterValue = (filterInput) => {
        const filterColumn = columns.filter(col => col.filterOption == true);
        const filtersKey = filterColumn.map(col => col.column);
        const filterSearch = filtersKey.map(col => 
            rows.filter(fil => fil[col].toLowerCase().includes(filterInput.toLowerCase()))
        ).flat();
        const reduceFilter = new Set(filterSearch);
        const result = [...reduceFilter];
        setDateFilter(result);
    };

    const addNew = () => {
        returnData({data: null, action: 'add'});
    }

    const getRowDate = (dataRow, action) => {
        returnData({data: dataRow, action: action});
    }

    const icon = (iconColumn, rowData) => {
        if(iconColumn == 'Delete') return (
        <IconButton onClick={() => getRowDate(rowData, iconColumn)}>
            <DeleteIcon  className='cursor-pointer' sx={{ color: pink[500] }} />
        </IconButton>
        ) ;
        if(iconColumn == 'Edit') return (
            <IconButton onClick={() => getRowDate(rowData, iconColumn)}>
                <EditIcon  className='cursor-pointer' color='primary'/>
            </IconButton>
        );
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
                    <div className="flex items-center justify-center">
                        <FormControl sx={{ width: '30vw' }} variant="outlined">
                            <InputLabel>Buscar</InputLabel>
                            <OutlinedInput
                                type='text'
                                onChange={() => filterValue(event.target.value)}
                                endAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon/>
                                </InputAdornment>
                                }
                                label="Buscar"
                            />
                        </FormControl>

                        <IconButton onClick={addNew}>
                            <AddIcon color='primary'/>
                        </IconButton>
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
                            {dataFilter.map((row, index) => (
                            <TableRow key={index}>
                                {columns.map((col, key) => (
                                <TableCell key={key}>
                                    {col.type == "string" ? row[col.column] : ""}
                                    {col.type == "bool" ? (row[col.column] == true ? (<DoneIcon color="success"/>) : (<CloseIcon color="error"/>)) : ("")}
                                    {col.type == "icon" ? icon(col.column, row) : ""}
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
    showTable: PropTypes.bool,
    returnData: PropTypes.func
};

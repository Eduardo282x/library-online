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
    TablePagination,
    AddIcon,
} from '../../materialUI';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {  useEffect, useState } from "react";
import { pink } from '@mui/material/colors';

import "./card.css";

export const Card = ({ title, columns, rows, showTable, returnData }) => {
    const [dataFilter, setDateFilter] = useState([]);
    const [columnsCard, setColumnsCard] = useState(columns);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const navigate = useNavigate();
    const back = () => navigate(-1);
    const userData = JSON.parse(localStorage.getItem('payload'));

    useEffect(() => {
        if(userData && columns && columns.length >0){
            if (userData.Rol != 1) {
                columns = columns.filter(col => col.column != 'Edit' && col.column != 'Delete');
                setColumnsCard(columns)
            }
        }
    }, []);

    useEffect(() => {
        setDateFilter(rows);
    }, [rows]);

    const filterValue = (filterInput) => {
        if(rows && rows.length > 0){
            const filterColumn = columns.filter(col => col.filterOption == true);
            const filtersKey = filterColumn.map(col => col.column);
            const filterSearch = filtersKey.map(col => 
                rows.filter(fil => fil[col].toLowerCase().includes(filterInput.toLowerCase()))
            ).flat();
            const reduceFilter = new Set(filterSearch);
            const result = [...reduceFilter];
            setDateFilter(result);
        }
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const addNew = () => {
        returnData({data: null, action: 'Add'});
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

                        {userData.Rol == 1 ?
                            <IconButton onClick={addNew}>
                                <AddIcon color='primary'/>
                            </IconButton> 
                            : ''
                        }
                        
                    </div>
                    : ''}
                </div>
                
                {showTable ? 
                <div className="tableContent">
                    <TableContainer component={Paper}>
                        <Table aria-label="sticky table">
                        <TableHead>
                            <TableRow className="headerRow">
                            {columnsCard.map((col, index) => (
                                <TableCell key={index} className="headerCol">{col.header}</TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataFilter
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                            <TableRow key={index}>
                                {columnsCard.map((col, key) => (
                                <TableCell key={key} sx={{width: col.width ? col.width : 100}}>
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

                {showTable ? 
                    <TablePagination
                    className='absolute right-5 bottom-5'
                    labelRowsPerPage='Registros'
                    rowsPerPageOptions={[5,10,25,50]}
                    component="div"
                    count={dataFilter.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                    : ''
                }
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

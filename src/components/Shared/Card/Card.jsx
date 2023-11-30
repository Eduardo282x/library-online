import PropTypes from "prop-types";
import "./card.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

export const Card = ({ title, columns, rows, showTable }) => {
    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }

    return (
        <div className="cardBody">
            <Paper elevation={8} className="paperContent" square={false}>
                <div className="headerContent">
                    <IconButton onClick={back}>
                        <ArrowBackIcon/>
                    </IconButton>
                    <h3>{title}</h3>
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
                                        <DoneIcon />
                                    ) : (
                                        <CloseIcon />
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

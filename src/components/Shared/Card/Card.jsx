import PropTypes from "prop-types";
import './card.css'
import Paper from '@mui/material/Paper';

export const Card = ({ title }) => {
    return (
        <div className="cardBody">
            <Paper elevation={8} className="paperContent" square={false}>
                <h3>{title}</h3>
            </Paper>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';

const JokeBox = ({ joke }) => {
    return (
        <div className="joke-box">
            <p>{joke}</p>
        </div>
    );
};

JokeBox.propTypes = {
    joke: PropTypes.string.isRequired,
};

export default JokeBox;
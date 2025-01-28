import React from 'react';
import PropTypes from 'prop-types';

const JokeButton = ({ onFetchJoke, loading }) => {
    return (
        <div>
            <button className="button-generate" onClick={onFetchJoke}>
                {loading ? "Chargement..." : "Générer une blague"}
            </button>
        </div>
    );
};

JokeButton.propTypes = {
    onFetchJoke: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default JokeButton;
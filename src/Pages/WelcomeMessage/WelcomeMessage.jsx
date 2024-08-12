import React from 'react';
import PropTypes from 'prop-types';

const WelcomeMessage = ({ firstName, lastName }) => {
    return (
        <h1 className="welcome-title">
            Добро пожаловать, {firstName} {lastName}!
        </h1>
    );
};

WelcomeMessage.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

export default WelcomeMessage;

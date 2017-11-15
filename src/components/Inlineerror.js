import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Inlineerror = ({ text }) => (
<span style={{ color: "#ae5856"}}>{text}</span>
);
    
Inlineerror.propTypes = {
 text: PropTypes.string.isRequired
};
export default Inlineerror;


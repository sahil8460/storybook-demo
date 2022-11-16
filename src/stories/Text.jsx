import React from 'react';
import PropTypes from 'prop-types';

export const Text = ({text, color, backgroundColor, isSpan, size, Heading}) => {
    if(isSpan){
        return(
            <span style={{color: color, backgroundColor: backgroundColor, fontSize: size}}>{text}</span>
        )
    }else{
        return(
            <Heading style={{color: color, backgroundColor: backgroundColor}}>{text}</Heading>
        )
    }
};

Text.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    isSpan: PropTypes.bool,
    size: PropTypes.string,
    Heading: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

Text.defaultProps = {
    text: "TEXT",
    color: "black",
    backgroundColor: "white",
    isSpan: false,
    size: "12px"
};
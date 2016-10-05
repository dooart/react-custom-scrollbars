import React from 'react';
/* eslint-disable react/prop-types */

export function renderViewDefault(props) {
    return <div {...props}/>;
}

export function renderTrackHorizontalDefault({ style, ...props }) {
    const finalStyle = {
        ...style,
        right: 2,
        bottom: 0,
        left: 2,
        borderRadius: 0
    };
    return <div style={finalStyle} {...props} />;
}

export function renderTrackVerticalDefault({ style, ...props }) {
    const finalStyle = {
        ...style,
        right: 0,
        bottom: 2,
        top: 2,
        borderRadius: 0
    };
    return <div style={finalStyle} {...props} />;
}

export function renderThumbHorizontalDefault({ style, ...props }) {
    const finalStyle = {
        ...style,
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: '#e20505'
    };
    return <div style={finalStyle} {...props} />;
}

export function renderThumbVerticalDefault({ style, ...props }) {
    const finalStyle = {
        ...style,
        cursor: 'pointer',
        borderRadius: 'inherit',
        backgroundColor: '#e20505'
    };
    return <div style={finalStyle} {...props} />;
}

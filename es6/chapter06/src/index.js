import React from 'react';
import { render } from 'react-dom';
import AddColorForm from './components/AddColorFormStateless';

window.React = React;

const logColor = (title, color) =>
    console.log(`새로운 색: ${title} | ${color}`);

render(
    <AddColorForm onNewColor={logColor} />,
    document.getElementById('react-container')
);

import React from 'react';
import { render } from 'react-dom';
import Summary from './components/SummaryStateless';

window.React = React;

render(
    <Summary title="땅콩버터와 젤리" ingredients={5} steps={3}/>,
    document.getElementById('react-container')
);

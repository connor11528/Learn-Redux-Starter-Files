import React from 'react';
import { render } from 'react-dom'; // dom stuff in its own package

// import css (webpack puts style tag in javascript and embeds it for us)
import css from './styles/style.styl';

render(<p>hello</p>, document.getElementById('root'));
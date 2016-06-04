import React from 'react';
import { render } from 'react-dom'; // dom stuff in its own package

// import css (webpack puts style tag in javascript and embeds it for us)
import css from './styles/style.styl';

// Import components
import Main from './components/Main';

render(<Main />, document.getElementById('root'));
import React from 'react';
import ReactDom from 'react-dom';
import CmpArtesanias from './CmpArtesanias';
import CmpHeader from './components/CmpHeader';

const rootElement = document.querySelector( '#root' );

ReactDom.render( <CmpArtesanias />, rootElement );

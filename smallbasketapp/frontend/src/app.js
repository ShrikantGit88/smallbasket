import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import getAppStore from './store/store';
import { getBooks } from './actions/books';
//import './styles/styles.scss';

import { Provider } from 'react-redux';

const store = getAppStore();


ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, 
   document.getElementById('root')
);
// const template = (
//     <Provider store={store}>
//         <AppRouter />
//     </Provider>
// );


// store.dispatch(getBooks()).then(() => {
//     ReactDOM.render(template, document.getElementById('app'));
// })
// .catch(error => { console.log("***** ");
// ReactDOM.render(template, document.getElementById('app')); 
// });

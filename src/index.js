import React from 'react';
import ReactDOM from 'react-dom';
import {setupRacMaterial} from "./Setup";
import TableExample from "./Example/TableExample";

setupRacMaterial();

ReactDOM.render(
    <React.StrictMode>
        <TableExample/>
    </React.StrictMode>,
    document.getElementById('root')
);

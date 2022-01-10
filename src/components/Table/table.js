import React from "react";
import { TableRow } from "./tableRow";
import './table.css';

export const Table = ({items, showToastInfo, toast}) => {
    return (
        <>
            <tbody>
                {
                    items.map((item, index) => (
                        <TableRow key={index} item={item.header} showToastInfo={showToastInfo} toastItem={item}/>
                        ))
                    }            
            </tbody>

            <React.Fragment>
                {toast}
            </React.Fragment>
        </>
    );
}
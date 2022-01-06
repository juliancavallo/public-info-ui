import React from "react";
import { TableHeader } from "./tableHeader";
import { TableRow } from "./tableRow";
import './table.css';

export const Table = ({items, columns, showToastInfo, toast}) => {
    return (
        <div className="table-wrapper">
            <table>
                <TableHeader columns={columns}/>
                <tbody>
                    {
                        items.map((item, index) => (
                            <TableRow key={index} item={item.header} showToastInfo={showToastInfo} toastItem={item}/>
                        ))
                    }            
                </tbody>
            </table>
            <React.Fragment>
                {toast}
            </React.Fragment>
        </div>
    );
}
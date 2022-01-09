import React from "react";
import { TableHeader } from "./tableHeader";
import { TableRow } from "./tableRow";
import './table.css';
import { TableFooter } from "./tableFooter";

export const Table = ({items, columns, showToastInfo, toast, size, page, totalPages, onPagedDataChange}) => {
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
            <TableFooter size={size} page={page} totalPages={totalPages} onPagedDataChange={onPagedDataChange} ></TableFooter>
            <React.Fragment>
                {toast}
            </React.Fragment>
        </div>
    );
}
import React from "react";
import { TableHeader } from "./tableHeader";
import { TableRow } from "./tableRow";

export const Table = ({items, columns, showToastInfo, toast}) => {
    return (
        <div className="table-wrapper">
            <table>
                <TableHeader columns={columns}/>
                <tbody>
                    {
                        items.map((item, index) => (
                            <TableRow key={index} item={item} showToastInfo={showToastInfo} />
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
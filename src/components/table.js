import React from "react";

export const Table = ({items, colNames, showToastInfo, children}) => {
    return (
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th style={{width:'45%'}}>{colNames[0].toUpperCase()}</th>
                        <th style={{width:'15%'}}>{colNames[1].toUpperCase()}</th>
                        <th style={{width:'20%'}}>{colNames[2].toUpperCase()}</th>
                        <th style={{width:'20%'}}>{colNames[3].toUpperCase()}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => (
                            <tr key={index} onClick={() => showToastInfo(item)}>
                                <td>{item.projectName}</td>
                                <td>{item.totalAmount}</td>
                                <td>{item.province}</td>
                                <td>{item.deparment}</td>
                            </tr>
                        ))
                    }            
                </tbody>
            </table>
            <>
                {children}
            </>
        </div>
    );
}
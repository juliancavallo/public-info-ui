import React from "react";

export default function Table({items, colNames}){
    return (
            <table>
                <thead>
                    <tr>
                        {colNames.map((item, index) => (
                            <th key={index}>
                                {item.toUpperCase()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => (
                            <tr key={index}>
                                {Object.values(item).map((val, i) => (
                                    <td key={i}>{val}</td>
                                ))}
                            </tr>
                        ))
                    }            
                </tbody>
            </table>
    );
}
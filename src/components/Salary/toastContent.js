import React from "react";

export const SalaryToastContent = ({salary}) => {
    const render = salary?.detail != null;
    return (
        <React.Fragment>
            {render ? 
            <React.Fragment>
                <p><strong>Sector: </strong>{salary.header.section}</p>
                <p><strong>Cargo: </strong>{salary.detail.position}</p>
                <p><strong>Salario mensual: </strong>{salary.header.monthlyWage}</p>
                <p><strong>Fecha: </strong>{`${salary.header.month}, ${salary.header.year}`}</p>
                <p><strong>Nro. documento: </strong>{salary.detail.documentNumber}</p>
             </React.Fragment> : ''}
            
        </React.Fragment>
    );
}
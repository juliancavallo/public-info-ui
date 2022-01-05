import React from "react";

export const ProjectToastContent = ({item}) => {
    const render = item?.detail != null;
    return (
        <React.Fragment>
            {render ? 
            <React.Fragment>
                {item.detail.description ? <p className="description">{item.detail.description}</p> : ''}
                <p><strong>Año de inicio: </strong>{item.detail.startYear}</p>
                <p><strong>Año de finalización: </strong>{item.detail.endYear}</p>
                <p><strong>Monto total: </strong>{item.header.totalAmount} ({item.detail.currencyType})</p>
                <p><strong>Duración: </strong>{item.detail.duration} días</p>
                <p><strong>Estado de la obra: </strong>{item.detail.status}</p>
                <p><strong>Ubicación: </strong>{`${item.header.province} - ${item.header.deparment}`}</p>
                <p><strong>Más información: </strong><a href={item.detail.projectUrl} target='blank'>Sitio oficial del Gobierno de la Nación</a></p>
            </React.Fragment> : ''}
            
        </React.Fragment>
    );
}
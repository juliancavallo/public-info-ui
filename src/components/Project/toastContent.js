import React from "react";

export const ProjectToastContent = ({project}) => {
    const render = project?.detail != null;
    return (
        <React.Fragment>
            {render ? 
            <React.Fragment>
                {project.detail.description ? <p className="description">{project.detail.description}</p> : ''}
                <p><strong>Año de inicio: </strong>{project.detail.startYear}</p>
                <p><strong>Año de finalización: </strong>{project.detail.endYear}</p>
                <p><strong>Monto total: </strong>{project.header.totalAmount} ({project.detail.currencyType})</p>
                <p><strong>Duración: </strong>{project.detail.duration} días</p>
                <p><strong>Estado de la obra: </strong>{project.detail.status}</p>
                <p><strong>Ubicación: </strong>{`${project.header.province} - ${project.header.deparment}`}</p>
                <p><strong>Más información: </strong><a href={project.detail.projectUrl} target='blank'>Sitio oficial del Gobierno de la Nación</a></p>
            </React.Fragment> : ''}
            
        </React.Fragment>
    );
}
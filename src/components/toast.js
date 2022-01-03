import './styles/toast.css'

export const Toast = ({show, closeToast, item}) => {
    return (
        <div className='toast-wrapper' style={{display: (show == true) ? 'flex' : 'none'}}>
            <div className="toast" >
                <span className='close' onClick={closeToast}>X</span>
                <h3>{item.projectName}</h3>
                <p>{item.description}</p>
                <p><strong>Año de inicio: </strong>{item.startYear}</p>
                <p><strong>Año de finalización: </strong>{item.endYear}</p>
                <p><strong>Duración: </strong>{item.duration} días</p>
                <p><strong>Estado de la obra: </strong>{item.status}</p>
                <p><strong>Más información: </strong><a href={item.projectUrl} target='blank'>Sitio oficial del Gobierno de la Nación</a></p>
            </div>
        </div>
    );
}
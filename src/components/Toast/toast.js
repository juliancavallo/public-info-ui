import '../../styles/toast.css'

export const Toast = ({show, closeToast, title, content}) => {
    return (
        <div className='toast-wrapper' style={{display: (show == true) ? 'flex' : 'none'}}>
            <div className="toast" >
                <div className='close-wrapper'>
                    <i className="far fa-times-circle" onClick={closeToast}></i>
                </div>
                <h3>{title}</h3>
                {content}
            </div>
        </div>
    );
}
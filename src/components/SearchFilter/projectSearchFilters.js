import './searchFilters.css'

export const SearchFilters = ({onSearchClick, refs}) => {
    const row = {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap'
    }

    const onKeyUp = (e) => {
        if(e.key == 'Enter')
            onSearchClick();
    }

    return (
        <div className="filter-box">
            <div className="input-container" onKeyUp={e => onKeyUp(e)}>
                <div style={row}>
                    <div className="filter">
                        <label htmlFor="province">Provincia:</label>
                        <input ref={refs.province} type="text" id="province" name="province" placeholder='ej. Santa Fe'></input>
                    </div>

                    <div className="filter">
                        <label htmlFor="department">Localidad:</label>
                        <input ref={refs.department} type="text" id="department" name="department" placeholder='ej. Rosario'></input>
                    </div>

                    <div className="filter">
                        <label htmlFor="fromDate">Fecha desde:</label>
                        <input ref={refs.fromDate} type="date" id="fromDate" name="fromDate"></input>
                    </div>

                    <div className="filter">
                        <label htmlFor="toDate">Fecha hasta:</label>
                        <input ref={refs.toDate} type="date" id="toDate" name="toDate"></input>
                    </div>
                </div>
                <div style={row}>
                    <div className="filter">
                        <label htmlFor="totalAmountMin">Monto mínimo:</label>
                        <input ref={refs.totalAmountMin} type="number" id="totalAmountMin" name="totalAmountMin" placeholder='ej. 2750000'></input>
                    </div>

                    <div className="filter">
                        <label htmlFor="totalAmountMax">Monto máximo:</label>
                        <input ref={refs.totalAmountMax} type="number" id="totalAmountMax" name="totalAmountMax" placeholder='ej. 15250000'></input>
                    </div>

                    <div className="filter">
                        <label htmlFor="description">Descripción:</label>
                        <input ref={refs.description} type="text" id="description" name="description" placeholder='ej. Alumbrado'></input>
                    </div>
                </div>
            </div>
            <button onClick={onSearchClick}>Buscar</button>
        </div>
    );
}
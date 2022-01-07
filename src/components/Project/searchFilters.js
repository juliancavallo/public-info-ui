export const SearchFilters = ({onSearchClick, refs}) => {
    return (
        <div className="filter-box">
            <div className="input-container">
                <div className="filter">
                    <label>Provincia:</label>
                    <input ref={refs.province} type="text" id="province" name="province"></input>
                </div>

                <div className="filter">
                    <label>Localidad:</label>
                    <input ref={refs.department} type="text" id="department" name="department"></input>
                </div>

                <div className="filter">
                    <label>Fecha desde:</label>
                    <input ref={refs.fromDate} type="date" id="fromDate" name="fromDate"></input>
                </div>

                <div className="filter">
                    <label>Fecha hasta:</label>
                    <input ref={refs.toDate} type="date" id="toDate" name="toDate"></input>
                </div>

                <div className="filter">
                    <label>Monto mínimo:</label>
                    <input ref={refs.minMount} type="number" id="minMount" name="minMount"></input>
                </div>

                <div className="filter">
                    <label>Monto máximo:</label>
                    <input ref={refs.maxMount} type="number" id="maxMount" name="maxMount"></input>
                </div>
            </div>
            <button onClick={onSearchClick}>Buscar</button>
        </div>
    );
}
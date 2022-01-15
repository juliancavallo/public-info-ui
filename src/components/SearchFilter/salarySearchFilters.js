import './searchFilters.css'

export const SearchFilters = ({onSearchClick, refs}) => {
    const onSelectChange = (e) => {
        refs.monthNum.current.value = e.target.selectedOptions[0].value;
    }

    const onKeyUp = (e) => {
        if(e.key == 'Enter')
            onSearchClick();
    }

    const row = {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap'
    }

    return (
        <div className="filter-box">
            <div className="input-container"  onKeyUp={e => onKeyUp(e)}>
                <div style={row}>
                    <div className="filter">
                        <label htmlFor="lastName">Apellido:</label>
                        <input ref={refs.lastName} type="text" id="lastName" name="lastName" placeholder='ej. Fernandez'></input>
                    </div>
                    <div className="filter">
                        <label htmlFor="firstName">Nombre:</label>
                        <input ref={refs.firstName} type="text" id="firstName" name="firstName" placeholder='ej. Alberto'></input>
                    </div>
                    <div className="filter">
                        <label htmlFor="monthNum">Mes:</label>
                        <select id='monthNum' ref={refs.monthNum}  onChange={e => onSelectChange(e)} defaultValue={''}>
                            <option value=''>...</option>
                            <option value='1'>Janaury</option>
                            <option value='2'>February</option>
                            <option value='3'>March</option>
                            <option value='4'>April</option>
                            <option value='5'>May</option>
                            <option value='6'>June</option>
                            <option value='7'>July</option>
                            <option value='8'>August</option>
                            <option value='9'>September</option>
                            <option value='10'>October</option>
                            <option value='11'>November</option>
                            <option value='12'>December</option>
                        </select> 
                    </div>
                </div>

                <div style={row}>
                    <div className="filter">
                        <label htmlFor="section">Sector:</label>
                        <input ref={refs.section} type="text" id="section" name="section" placeholder='ej. Deporte'></input>
                    </div>
                    <div className="filter">
                        <label htmlFor="position">Cargo:</label>
                        <input ref={refs.position} type="text" id="position" name="position" placeholder='ej. Ministro'></input>
                    </div>
                    <div className="filter">
                        <label htmlFor="minMonthlyWage">Salario mínimo:</label>
                        <input ref={refs.minMonthlyWage} type="number" id="minMonthlyWage" name="minMonthlyWage" placeholder='ej. 150000'></input>
                    </div>
                    <div className="filter">
                        <label htmlFor="maxMonthlyWage">Salario máximo:</label>
                        <input ref={refs.maxMonthlyWage} type="number" id="maxMonthlyWage" name="maxMonthlyWage" placeholder='ej. 450000'></input>
                    </div>
                </div>
            </div>
            <button onClick={onSearchClick}>Buscar</button>
        </div>
    );
}
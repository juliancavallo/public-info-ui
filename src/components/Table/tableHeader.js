export const TableHeader = ({items, onTableHeaderClick, sidx, sord}) => {
    const onClick = (key) => {
        onTableHeaderClick(key);
    }

    
    const columns = {
        projectname: "Proyecto",
        totalamount: "Monto total",
        province: "Provincia",  
        department: "Localidad"
    }

    return (
        <thead>
            <tr>
                {items[0] ? Object.entries(items[0].header).map((key, value) => (
                        <th key={key[0]} onClick={() => onClick(key[0])}>
                            {columns[key[0].toLowerCase()].toUpperCase()}
                            {sidx == key[0] ? <i className={`fas fa-sort-${sord == 'asc' ? 'up' : 'down'}`}></i> : ''}
                        </th>
                )) : null}
            </tr>
        </thead>
    );
}
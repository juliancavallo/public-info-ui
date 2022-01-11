export const TableHeader = ({columns, onTableHeaderClick, sidx, sord}) => {
    const onClick = (key) => {
        onTableHeaderClick(key);
    }

    return (
        <thead>
            <tr>
                {columns.map((col) =>(
                    <th key={col.key} style={{width:col.width}} onClick={() => onClick(col.key)}>
                        {col.value.toUpperCase()}
                        {sidx == col.key ? <i className={`fas fa-sort-${sord == 'asc' ? 'up' : 'down'}`}></i> : ''}
                    </th>
                ))}
            </tr>
        </thead>
    );
}
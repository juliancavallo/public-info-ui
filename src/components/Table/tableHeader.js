export const TableHeader = ({columns}) => {
    return (
        <thead>
            <tr>
                {columns.map((col) =>(
                    <th key={col.value} style={{width:col.width}}>{col.value.toUpperCase()}</th>
                ))}
            </tr>
        </thead>
    );
}
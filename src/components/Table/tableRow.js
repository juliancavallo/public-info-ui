export const TableRow = ({cells, toastItem, showToastInfo}) => {
    return (
        <tr onClick={() => showToastInfo(toastItem)}>
            {Object.entries(cells).map((prop, i) => (
                <td key={i}>{prop[1]}</td>
            ))}
        </tr>
    );
}
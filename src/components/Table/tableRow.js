export const TableRow = ({item, showToastInfo, toastItem}) => {
    return (
        <tr onClick={() => showToastInfo(toastItem)}>
            {Object.entries(item).map((prop, i) => (
                <td key={i}>{prop[1]}</td>
            ))}
        </tr>
    );
}
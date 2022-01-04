export const TableRow = ({index, item, showToastInfo}) => {
    return (
        <tr onClick={() => showToastInfo(item)}>
            <td>{item.projectName}</td>
            <td>{item.totalAmount}</td>
            <td>{item.province}</td>
            <td>{item.deparment}</td>
        </tr>
    );
}
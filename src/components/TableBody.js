const TableBody = ({ tableData, columns }) => {
    console.log(tableData);
    console.log('ayo');

    return (
     <tbody>
    {tableData.map(([symbol, price]) => {
      const annualizedPrice = (price * 365 * 100).toFixed(2) + '%';
      return (
        <tr key={symbol}>
          <td>{symbol}</td>
          <td>{annualizedPrice}</td>
        </tr>
      );
    })}
     </tbody>
    );
   };
   
   export default TableBody;
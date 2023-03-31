import { useState, useEffect } from "react";
import tableData1 from "../data.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = () => {

  const [marginalRates, setMarginalRates] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/kucoin/margin/current`);
      const data = await response.json();
      setMarginalRates(data);
    };

    fetchData();
  }, []);

  
 const [tableData, setTableData] = useState(tableData1);

 const columns = [
  { label: "Coin", accessor: 0, sortable: false },
  { label: "Rate", accessor: 1, sortable: false },
 ];

 const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
     const sorted = [...marginalRates].sort((a, b) => {
      if (a[sortField] === null) return 1;
      if (b[sortField] === null) return -1;
      if (a[sortField] === null && b[sortField] === null) return 0;
      return (
       a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
        numeric: true,
       }) * (sortOrder === "asc" ? 1 : -1)
      );
     });
     setMarginalRates(sorted);
    }
   };

   console.log(marginalRates);
   console.log('pre');
   return (
    <>
      <table className="table">
        <caption>
          Using the marginal rate for a $2000 borrow
        </caption>
        <TableHead columns={columns} handleSorting={handleSorting} />
        {marginalRates.length > 0 ? (
          <TableBody columns={columns} tableData={marginalRates} />
        ) : (
          <tbody>
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                Loading data...
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </>
  );
};

export default Table;
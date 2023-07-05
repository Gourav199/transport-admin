import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "./css/view-lr.css";

export default function Viewlr() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch the data from your Node.js backend
    axios
      .get("http://localhost:5000/viewlr")
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching table data:", error);
      });
  }, []);


  const columns = [
    
    {
      name: "id",
      selector: (row) => row.id,
    },
    {
      name: "LR Number",
      selector: (row) => row.lr,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
    },
    {
      name: "From",
      selector: (row) => row.arrival,
    },
    {
      name: "To",
      selector: (row) => row.destination,
    },
    {
      name: "Consiner",
      selector: (row) => row.consiner,
    },
    {
      name: "Consignee",
      selector: (row) => row.Consignee,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Vechicle",
      selector: (row) => row.date,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
  ];
  
  const paginationOptions = {
    rowsPerPageText: "1",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 text-search">
            <input
              type="text"
              placeholder="Search LR"
              className="form-control"
            />
          </div>
          <div className="table-responsive col-lg-12 table-design">
            <DataTable
              columns={columns}
              data={tableData}
              pagination
              paginationPerPage={10}
              paginationComponentOptions={paginationOptions}
              subHeader
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

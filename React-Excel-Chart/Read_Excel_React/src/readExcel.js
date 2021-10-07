import React, { useState } from 'react';
import * as Excel from 'xlsx';

const ReadExcel = () => {
  const [excelData, setExcelData] = useState([]);

  // Read Excel File

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (event) => {
        const bufferArray = event.target.result;

        const wb = Excel.read(bufferArray, { type: 'buffer' });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = Excel.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((data) => {
      setExcelData(data);
    });
  };

  return (
    <div>
      <input
        type='file'
        onChange={(event) => {
          const file = event.target.files[0];
          readExcel(file);
        }}
      />

      <table className='table table-dark table-striped'>
        <thead>
          <tr>
            <th scope='col'>SalesOrderID</th>
            <th scope='col'>OrderDate</th>
            <th scope='col'>ShipDate</th>
            <th scope='col'>AccountNumber</th>
            <th scope='col'>ProductID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Product_SUBCategory</th>
            <th scope='col'>ListPrice</th>
            <th scope='col'>UnitPrice</th>
            <th scope='col'>OrderQty</th>
            <th scope='col'>StandardCost</th>
          </tr>
        </thead>
        <tbody>
          {excelData.map((data, index) => (
            <tr key={data.index}>
              <th>{data.SalesOrderID}</th>
              <th>{data.OrderDate}</th>
              <th>{data.ShipDate}</th>
              <th>{data.AccountNumber}</th>
              <th>{data.ProductID}</th>
              <th>{data.Name}</th>
              <th>{data.Product_SUBCategory}</th>
              <th>{data.ListPrice}</th>
              <th>{data.UnitPrice}</th>
              <th>{data.OrderQty}</th>
              <th>{data.StandardCost}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadExcel;

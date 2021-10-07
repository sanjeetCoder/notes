import React, { useState } from 'react';
import * as Excel from 'xlsx';
import { Bar, Line, Pie } from 'react-chartjs-2';

class DisplayExcelChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      excelData: {
        labels: [
          'SalesOrderID',
          'OrderDate',
          'ShipDate',
          'AccountNumber',
          'ProductID',
          'Name',
          'Product_SUBCategory',
          'ListPrice',
          'UnitPrice',
          'OrderQty',
          'StandardCost',
        ],
        datasets: [
          {
            label: 'Analytics',
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
            backgroundColor: [
              'rgba(255,90,131,0.6)',
              'rgba(255,90,131,0.6)',
              'rgba(255,90,131,0.6)',
              'rgba(255,90,131,0.6)',
              'rgba(255,90,131,0.6)',
              'rgba(255,90,131,0.6)',
              'rgba(255,90,131,0.6)',
              'rgba(255,90,131,0.6)',
              'rgba(255,90,131,0.6)',
              'rgba(255,90,131,0.6)',
              'rgba(255,90,131,0.6)',
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className='chart'>
        <h2>Excel Chart</h2>
        <Pie
          data={this.state.excelData}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default DisplayExcelChart;

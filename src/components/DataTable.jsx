import React from 'react';
import Table from 'react-bootstrap/Table';
import './css/DataTable.css';

function DataTable({data}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {data?.length !== 0 && data?.map((item, index) => (
          <tr key={index}>
            <td>{item.file}</td>
            <td>{item.text}</td>
            <td>{item.number}</td>
            <td>{item.hex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataTable;
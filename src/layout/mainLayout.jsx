import React from "react";
import DataTable from "../components/DataTable";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
const toolboxLogo = require('../assets/images/logo_toolbox.jpeg');

function MainLayout({ info }) {
  return (
    <div className="App">
      <Header logo={toolboxLogo} />
      <div className="table-data">
        <SearchBar />
        <DataTable data={info} />
      </div>
    </div>
  );
}

export default MainLayout;

import React from 'react';
import Table from "./components/table/Table";
import './style.scss';
import AddNewRowButton from "./components/add-new-row-button/AddNewRowButton";
import {connect} from "react-redux";
import NewRowForm from "./components/new-row-form/NewRowForm";
import PrependTableDetails from "./components/prepend-table-details/PrependTableDetails";

const appStyle = {
  height: '100%'
}

const getAdditionalFields = (isAdding) => {
  return isAdding ? <NewRowForm /> : null;
}

function App({isAdding}) {
  return (
    <div className="application" style={appStyle}>
      <div className="header"></div>
      <div className="nav"></div>
      <div className="content">
        <PrependTableDetails />
        <Table />
        {getAdditionalFields(isAdding)}
        <AddNewRowButton />
      </div>
      <div className="widgets"></div>
      <div className="footer"></div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAdding: state.rows.isAdding
  };
};

export default connect(mapStateToProps)(App);

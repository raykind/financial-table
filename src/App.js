import React from 'react';
import Table from "./components/table/Table";
import AddNewRowButton from "./components/add-new-row-button/AddNewRowButton";
import {connect} from "react-redux";
import NewRowForm from "./components/new-row-form/NewRowForm";

const getAdditionalFields = (isAdding) => {
  return isAdding ? <NewRowForm /> : null;
}

function App({isAdding}) {
  return (
    <div className="container">
      <Table />
      {getAdditionalFields(isAdding)}
      <AddNewRowButton />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAdding: state.rows.isAdding
  };
};

export default connect(mapStateToProps)(App);

import React from "react";
import {toggleNewRow} from "../../redux/actions/actions";
import {connect} from "react-redux";


const AddNewRowButton = ({toggleNewRow, isAdding}) => {
  return (
    <button
      className="btn btn-success mdi mdi-plus"
      onClick={toggleNewRow}
      disabled={isAdding}
    />
  )
}

const mapDispatchToProps = {
  toggleNewRow
}

const mapStateToProps = state => {
  return {
    isAdding: state.rows.isAdding
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewRowButton);

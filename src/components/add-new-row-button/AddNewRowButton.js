import React from "react";
import {addNewRow} from "../../redux/actions/actions";
import {connect} from "react-redux";


const AddNewRowButton = ({addNewRow}) => {
  return (
    <button
      className="btn btn-success mdi mdi-plus"
      onClick={addNewRow}
    />
  )
}

const mapDispatchToProps = {
  addNewRow
}

export default connect(null, mapDispatchToProps)(AddNewRowButton);

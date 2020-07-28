import React from "react";
import {toggleNewRow} from "../../redux/actions/actions";
import {connect} from "react-redux";

const style = {
  width: '50px',
  transition: 'all .3s linear'
}

const AddNewRowButton = ({toggleNewRow, isAdding}) => {
  return (
    <button
      className={"btn mdi " +
        (
          isAdding
            ? "btn-outline-danger mdi-close"
            : "btn-outline-success mdi-plus"
        )
      }
      style={style}
      onClick={toggleNewRow}
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

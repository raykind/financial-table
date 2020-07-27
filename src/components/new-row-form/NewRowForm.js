import React from "react";
import './NewRowForm.scss';
import {connect} from "react-redux";
import {pushNewRow, toggleNewRow} from "../../redux/actions/actions";

class NewRowForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      amount: '',
      comment: ''
    }
  }

  addNewRow = () => {
    this.props.pushNewRow(this.state);
    this.setState({
      date: '',
      amount: '',
      comment: ''
    })
    this.props.toggleNewRow();
  }

  changeInputHandler = event => {
    event.persist();

    this.setState(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  render() {
    return (
      <div className="new-row-form-fields">
        <div className="labels">
          <label className="mr-3">Date</label>
          <label className="mr-3">Amount</label>
          <label>Comment</label>
        </div>
        <div className="fields">
          <input
            type="text"
            className="mr-3"
            name="date"
            onChange={this.changeInputHandler}
            value={this.state.date}
          />
          <input
            type="text"
            className="mr-3"
            name="amount"
            onChange={this.changeInputHandler}
            value={this.state.amount}
          />
          <input
            type="text"
            className="mr-3"
            name="comment"
            onChange={this.changeInputHandler}
            value={this.state.comment}
          />
          <button
            className="btn btn-primary"
            onClick={this.addNewRow}
          >Add
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  pushNewRow,
  toggleNewRow
}

export default connect(null, mapDispatchToProps)(NewRowForm);

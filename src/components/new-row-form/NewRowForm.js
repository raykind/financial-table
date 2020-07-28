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
      comment: '',
      isIncome: false
    }
  }

  addNewRow = () => {
    this.props.pushNewRow(this.state);
    this.setState({
      date: '',
      amount: '',
      comment: '',
      isIncome: false
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

  changeIncomeType = () => {
    this.setState(prev => ({
      ...prev,
      isIncome: !prev.isIncome
    }))
  }

  render() {
    return (
      <div className="new-row-form-fields">
        <div className="labels">
          <label className="date mr-3">Date</label>
          <label className="amount mr-3">Amount</label>
          <label className="comment mr-3">Comment</label>
        </div>
        <div className="fields">
          <input
            type="text"
            className={
              "mr-3 " + (
                this.state.isIncome
                  ? "income"
                  : "outcome"
              )
            }
            name="date"
            onChange={this.changeInputHandler}
            value={this.state.date}
          />
          <input
            type="text"
            className={
              "mr-3 " + (
                this.state.isIncome
                  ? "income"
                  : "outcome"
              )
            }
            name="amount"
            onChange={this.changeInputHandler}
            value={this.state.amount}
          />
          <input
            type="text"
            name="comment"
            className={(
              this.state.isIncome
                ? "income"
                : "outcome"
            )}
            onChange={this.changeInputHandler}
            value={this.state.comment}
          />
          <div
            className={
              "type-btn mdi mx-2 " +
              (
                this.state.isIncome
                  ? "mdi-plus income"
                  : "mdi-minus outcome"
              )
            }
            onClick={this.changeIncomeType}
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

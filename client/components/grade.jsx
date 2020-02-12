import React from 'react';

export default class Grade extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      update: 1,
      id: props.sending.studentId,
      name: '',
      course: '',
      grade: ''
    };

    this.deleteOne = this.deleteOne.bind(this);
    this.changeUpdate = this.changeUpdate.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendValue = this.sendValue.bind(this);
  }

  changeUpdate() {
    this.setState({ update: 0 });
  }

  cancelUpdate() {
    this.setState({ update: 1 });
  }

  deleteOne() {
    return this.props.deleteStudent(this.props.sending.studentId);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  sendValue(event) {
    event.preventDefault();
    const sendValue = {
      studentId: this.state.id,
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.update(sendValue);
  }

  render() {
    if (this.state.update === 1) {
      return (
        <tr className="row">
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">{this.props.sending.name}</td>
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">{this.props.sending.course}</td>
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">{this.props.sending.grade}</td>
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <button className="col-10 col-xl-3 col-lg-4 col-md-5 col-sm-4 btn btn-danger center-block mr-3 mb-2" onClick={this.deleteOne}>Delete</button>
            <button className="col-10 col-xl-3 col-lg-4 col-md-5 col-sm-4 btn btn-warning center-block mb-2" onClick={this.changeUpdate}>Update</button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr className="row">
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"><input name="name" defaultValue={this.props.sending.name} onChange={this.handleChange} ></input></td>
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"><input name="course" defaultValue={this.props.sending.course} onChange={this.handleChange} ></input></td>
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"><input name="grade" defaultValue={this.props.sending.grade} onChange={this.handleChange} ></input></td>
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <button className="col-10 col-xl-3 col-lg-4 col-md-5 col-sm-4 btn btn-outline-danger center-block mr-3 mb-2" onClick={this.cancelUpdate}>Cancel</button>
            <button className="col-10 col-xl-3 col-lg-4 col-md-5 col-sm-4 btn btn-outline-success center-block mb-2" onClick={this.sendValue}>Save</button>
          </td>
        </tr>
      );
    }
  }
}

import React from 'react';

export default class Grade extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      update: 1,
      id: props.sending.studentId,
      name: props.sending.name,
      course: props.sending.course,
      grade: props.sending.grade,
      status: {
        statusName: '',
        statusCourse: '',
        statusGrade: ''
      }
    };

    this.deleteOne = this.deleteOne.bind(this);
    this.changeUpdate = this.changeUpdate.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.sendValue = this.sendValue.bind(this);
    this.checkEmptySend = this.checkEmptySend.bind(this);
  }

  changeUpdate() {
    this.setState({ update: 0 });
    this.setState({ statusName: '' });
    this.setState({ statusCourse: '' });
    this.setState({ statusGrade: '' });
    this.setState({ name: this.props.sending.name, course: this.props.sending.course, grade: this.props.sending.grade });
  }

  cancelUpdate() {
    this.setState({ update: 1 });
    this.setState({
      status: {
        statusName: '',
        statusCourse: '',
        statusGrade: ''
      }
    });
    this.setState({ name: this.props.sending.name, course: this.props.sending.course, grade: this.props.sending.grade });
  }

  deleteOne() {
    return this.props.deleteStudent(this.props.sending.studentId);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  sendValue() {
    const sendValue = {
      studentId: this.state.id,
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.update(sendValue);
    this.cancelUpdate();
  }

  checkEmptySend() {
    var emptyArr = [];
    const value = this.state;
    for (var key in value) {
      // eslint-disable-next-line no-prototype-builtins
      if (value.hasOwnProperty(key)) {
        if (value[key] === '') {
          emptyArr.push(key);
        }
      }
    }

    for (let i = 0; i < emptyArr.length; i++) {
      if (emptyArr[i] === 'name') {
        this.setState(prevState => ({
          status: {
            ...prevState.status,
            statusName: '*Empty Name'
          }
        }));
      } else if (emptyArr[i] === 'course') {
        this.setState(prevState => ({
          status: {
            ...prevState.status,
            statusCourse: '*Empty Course'
          }
        }));
      } else if (emptyArr[i] === 'grade') {
        this.setState(prevState => ({
          status: {
            ...prevState.status,
            statusGrade: '*Empty Grade'
          }
        }));
      }
    }

    if (emptyArr.length <= 3) {
      this.sendValue();
    }
  }

  render() {
    if (this.state.update === 1) {
      return (
        <tr className="row">
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">{this.props.sending.name}</td>
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">{this.props.sending.course}</td>
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">{this.props.sending.grade}</td>
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <button className="col-12 col-xl-4 col-lg-6 col-md-9 col-sm-6 btn btn-danger center-block mr-3 mb-2" onClick={this.deleteOne}>Delete</button>
            <button className="col-12 col-xl-4 col-lg-6 col-md-9 col-sm-6 btn btn-warning center-block mb-2" onClick={this.changeUpdate}>Update</button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr className="row">
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"><input type="text" name="name" defaultValue={this.props.sending.name} onChange={this.handleChange} className="w-100" ></input><p className="text-danger mt-2">{this.state.status.statusName}</p></td>
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"><input type="text" name="course" defaultValue={this.props.sending.course} onChange={this.handleChange} className="w-100"></input><p className="text-danger mt-2">{this.state.status.statusCourse}</p></td>
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3"><input type="number" name="grade" defaultValue={this.props.sending.grade} onChange={this.handleChange} className="w-50"></input><p className="text-danger mt-2">{this.state.status.statusGrade}</p></td>
          <td className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">
            <button className="col-12 col-xl-4 col-lg-6 col-md-9 col-sm-6 btn btn-outline-danger center-block mr-3 mb-2" onClick={this.cancelUpdate}>Cancel</button>
            <button className="col-12 col-xl-4 col-lg-6 col-md-9 col-sm-6 btn btn-outline-success center-block mb-2" onClick={this.checkEmptySend}>Save</button>
          </td>
        </tr>
      );
    }
  }
}

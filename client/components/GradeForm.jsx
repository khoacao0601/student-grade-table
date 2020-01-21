import React from 'react';

export default class GradeFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.sendValue = this.sendValue.bind(this);
  }

  handleChangeName() {
    this.setState({ name: event.target.value });
  }

  handleChangeCourse() {
    this.setState({ course: event.target.value });
  }

  handleChangeGrade() {
    this.setState({ grade: parseInt(event.target.value) });
  }

  handleReset() {
    this.setState({ name: '', course: '', grade: '' });
  }

  sendValue(event) {
    event.preventDefault();
    const valueSend = this.state;
    this.props.addOne(valueSend);
    this.handleReset();
  }

  render() {
    return (
      <div className="grade-form" >
        <form onSubmit={this.sendValue} onReset={this.handleReset}>
          <div className="">
            <i className="fas fa-user"></i>
            <input placeholder="Name" type="text" value={this.state.name} onChange={this.handleChangeName}></input>
          </div>
          <i className="fas fa-book"></i>
          <input placeholder="Course" type="text" value={this.state.course} onChange={this.handleChangeCourse}></input>
          <i className="fas fa-graduation-cap"></i>
          <input placeholder="Grade" type="number" value={this.state.grade} onChange={this.handleChangeGrade}></input>
          <div className="button-grade-from d-flex justify-content-left">
            <button type="submit" className="btn btn-success">Add</button>
            <button type="reset" className="btn btn-success">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

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
      <div className="grade-form d-inline-block ml-3" >
        <form onSubmit={this.sendValue} onReset={this.handleReset}>
          <div className="d-block-xl">
            <i className="fas fa-user mr-2"></i>
            <input placeholder="Name" type="text" value={this.state.name} onChange={this.handleChangeName}></input>
          </div>
          <div className="d-block mt-2">
            <i className="fas fa-book mr-2"></i>
            <input placeholder="Course" type="text" value={this.state.course} onChange={this.handleChangeCourse}></input>
          </div>
          <div className="d-block mt-2">
            <i className="fas fa-graduation-cap mr-2"></i>
            <input placeholder="Grade" type="number" value={this.state.grade} onChange={this.handleChangeGrade}></input>
          </div>
          <div className="button-grade-from d-flex justify-content-left mt-3">
            <button type="submit" className="btn btn-success ml-3">Add</button>
            <button type="reset" className="btn btn-success ml-3">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

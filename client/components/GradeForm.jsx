import React from 'react';

export default class GradeFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {
        name: '',
        course: '',
        grade: ''
      },
      status: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
    this.handleChangeGrade = this.handleChangeGrade.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.sendValue = this.sendValue.bind(this);
    this.checkEmptySend = this.checkEmptySend.bind(this);
  }

  handleChangeName() {
    this.setState({
      value: {
        name: event.target.value,
        course: this.state.value.course,
        grade: this.state.value.grade
      }
    });
  }

  handleChangeCourse() {
    this.setState({
      value: {
        name: this.state.value.name,
        course: event.target.value,
        grade: this.state.value.grade
      }
    });
  }

  handleChangeGrade() {
    this.setState({
      value: {
        name: this.state.value.name,
        course: this.state.value.course,
        grade: event.target.value
      }
    });
  }

  handleReset() {
    this.setState({ name: '', course: '', grade: '' });
    this.setState({
      value: {
        name: '',
        course: '',
        grade: ''
      }
    });
  }

  sendValue() {
    const valueSend = this.state.value;
    this.props.addOne(valueSend);
    this.handleReset();
  }

  checkEmptySend(event) {
    event.preventDefault();
    var emptyArr = ['*Missing: '];
    const value = this.state.value;
    for (var key in value) {
      // eslint-disable-next-line no-prototype-builtins
      if (value.hasOwnProperty(key)) {
        if (value[key] === '') {
          emptyArr.push(key + '!');
        }
      }
    }

    if (emptyArr.length === 1) {
      this.sendValue();
      this.setState({ status: '' });
    } else {
      this.setState({ status: emptyArr.join(' ') });
    }
  }

  render() {
    return (
      <div className="grade-form d-inline-block ml-3" >
        <form onSubmit={this.checkEmptySend} onReset={this.handleReset}>
          <div className="d-block-xl">
            <i className="fas fa-user mr-2"></i>
            <input placeholder="Name" name="name" type="text" value={this.state.name} onChange={this.handleChangeName}></input>
          </div>
          <div className="d-block mt-2">
            <i className="fas fa-book mr-2"></i>
            <input placeholder="Course" name="course" type="text" value={this.state.course} onChange={this.handleChangeCourse}></input>
          </div>
          <div className="d-block mt-2">
            <i className="fas fa-graduation-cap mr-2"></i>
            <input placeholder="Grade" name="grade" type="number" value={this.state.grade} onChange={this.handleChangeGrade}></input>
          </div>
          <div className="button-grade-from d-flex justify-content-left mt-3">
            <button type="submit" className="btn btn-success ml-3">Add</button>
            <button type="reset" className="btn btn-success ml-3">Cancel</button>
          </div>
          <p className="text-danger mt-2"> {this.state.status}</p>
        </form>
      </div>
    );
  }
}

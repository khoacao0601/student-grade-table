import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
import GradeForm from './GradeForm';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.addStudent = this.addStudent.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(respone => respone.json())
      .then(data => this.setState({ list: data }))
      .catch(error => alert(error));
  }

  getAverageGrade() {
    if (this.state.list) {
      let grade = null;
      let counter = 0;
      for (var count = 0; count < this.state.list.length; count++) {
        grade += this.state.list[count].grade;
        counter++;
      }
      let average = grade / counter;
      return Math.round(average);
    } else {
      return null;
    }
  }

  addStudent(newStudent) {
    fetch('/api/grades', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudent)
    })
      .then(res => res.json())
      .then(student => {
        const allStudents = this.state.list.concat(student);
        this.setState({ list: allStudents });
      })
      .catch(error => alert(error));
  }

  deleteStudent(removeStudentId) {
    const findId = this.state.list.findIndex(students => { return students.id === removeStudentId; });
    fetch('/api/grades/' + removeStudentId, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(update => {
        const newArray = this.state.list.slice();
        newArray.splice(findId, 1);
        this.setState({ list: newArray });
        this.getAverageGrade();
      })
      .catch(error => alert(error));
  }

  render() {
    return (
      <div>
        <Header averageG={this.getAverageGrade()}/>
        <GradeTable table={this.state.list} remove={this.deleteStudent}/>
        <GradeForm addOne={this.addStudent}/>
      </div>
    );
  }
}

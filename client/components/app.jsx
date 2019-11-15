import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      averageGrade: null
    };
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

  render() {
    this.getAverageGrade();
    return (
      <div>
        <Header averageG={this.getAverageGrade()}/>
        <GradeTable table={this.state.list}/>
      </div>
    );
  }
}

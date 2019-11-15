import React from 'react';
import Header from './header';
import GradeTable from './gradetable';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    fetch('/api/grades')
      .then(respone => respone.json())
      .then(data => this.setState({ list: data }))
      .catch(error => alert(error));
  }

  render() {
    return (
      <div>
        <Header />
        <GradeTable table={this.state.list}/>
      </div>
    );
  }
}

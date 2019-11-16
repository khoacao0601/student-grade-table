import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {
  const table = props.table.map((object, indexArray) => <Grade key={indexArray} sending={object}/>);

  return (
    <div className="grade-table">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
}

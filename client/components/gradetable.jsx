import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {
  const table = props.table.map((object, indexArray) => <Grade key={indexArray} sending={object} deleteStudent={props.remove}/>);

  return (
    <div className="grade-table d-inline-block col-xl-10 col-lg-8 col-md-8 col-xs-8">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Course</th>
            <th scope="col">Grade</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
}

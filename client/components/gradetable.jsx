import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {
  const table = props.table.map((object, indexArray) => <Grade key={indexArray} sending={object} deleteStudent={props.remove} update={props.update}/>);

  return (
    <div className="grade-table d-inline-block col-xl-10 col-lg-8 col-md-8 col-xs-8">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr className="row">
            <th scope="col" className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">Student Name</th>
            <th scope="col" className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">Course</th>
            <th scope="col" className="col-3 col-xl-3 col-lg-3 col-md-3 col-sm-3">Grade</th>
            <th scope="col" className="col-3 col-xl-9 col-lg-3 col-md-3 col-sm-3">Operation</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
}

import React from 'react';

export default function Grade(props) {

  function deleteOne() {
    return props.deleteStudent(props.sending.studentId);
  }

  return (
    <tr>
      <td>{props.sending.name}</td>
      <td>{props.sending.course}</td>
      <td>{props.sending.grade}</td>
      <td>
        <button className="col-10 col-xl-2 col-lg-4 col-md-5 col-sm-4 btn btn-danger center-block mr-3 mb-2" onClick={deleteOne}>Delete</button>
        <button className="col-10 col-xl-2 col-lg-4 col-md-5 col-sm-4 btn btn-warning center-block mb-2" onClick={deleteOne}>Update</button>
      </td>
    </tr>
  );
}

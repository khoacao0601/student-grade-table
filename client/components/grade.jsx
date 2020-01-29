import React from 'react';

export default function Grade(props) {

  function deleteOne() {
    return props.deleteStudent(props.sending.id);
  }

  return (
    <tr>
      <td>{props.sending.name}</td>
      <td>{props.sending.course}</td>
      <td>{props.sending.grade}</td>
      <td>
        <button className="btn btn-danger center-block mr-3" onClick={deleteOne}>Delete</button>
        <button className="btn btn-warning center-block" onClick={deleteOne}>Update</button>
      </td>
    </tr>
  );
}

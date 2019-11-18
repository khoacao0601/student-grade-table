import React from 'react';

/* function deleteOne(props) {
  return props.deleteStudent(props.sending.id);
} */

export default function Grade(props) {
  return (
    <tr>
      <td>{props.sending.name}</td>
      <td>{props.sending.course}</td>
      <td>{props.sending.grade}</td>
      <td><button className="btn btn-danger center-block" onClick={() => props.deleteStudent(props.sending.id)}>Delete</button></td>
    </tr>
  );
}

import React from 'react';

export default function Grade(props) {
  return (
    <tr>
      <td>{props.sending.name}</td>
      <td>{props.sending.course}</td>
      <td>{props.sending.grade}</td>
    </tr>
  );
}

import React from 'react';

export default function Header(props) {
  return (
    <div>
      <h1>Students Grade Table</h1>
      <h2>Average: {props.averageG}</h2>
    </div>
  );
}

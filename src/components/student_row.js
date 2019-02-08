import React from 'react';

const StudentRow = (props) => {
    const {id, name, course, grade} = props.student;

  return (
      <tr>
          <td>{name}</td>
          <td>{course}</td>
          <td>{grade}</td>
      </tr>
  )
};

export default StudentRow;
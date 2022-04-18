import React from "react";

function PresentStudentList(props) {
  return (
    <div
      className="present-studnts"
      style={{ border: "2px solid green", padding: "5px" }}
    >
      <h4 style={{ underline: "2px solid green" }}>Present Students</h4>
      <ul>
        {props.students
          .filter((item) => item.isPresent === true)
          .map((student) => (
            <li>
              <span> {student.name}</span>
              <button onClick={() => props.toggleHandler(student.id)}>
                Accidentally Added?
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PresentStudentList;

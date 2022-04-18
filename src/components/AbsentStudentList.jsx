import React from "react";

function AbsentStudentList(props) {
  return (
    <div
      className="absent-students"
      style={{ border: "2px solid cyan", padding: "5px" }}
    >
      <h4> Absent Students</h4>
      <ul>
        {props.students
          .filter((item) => item.isPresent === false)
          .map((student) => (
            <li>
              <span> {student.name}</span>
              <button onClick={() => props.toggleHandler(student.id)}>
                Accidentally Added?{" "}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AbsentStudentList;

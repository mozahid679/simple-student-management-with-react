import React from "react";

function AllStudentList(props) {
  const presentHandler = (id) => {
    const student = props.students.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("The student is already present in the present list");
    } else if (student.isPresent === false) {
      alert("The student is already present in the absent list");
    } else if (student.isPresent === undefined) {
      props.setStudents(
        props.students.map((item) => {
          if (item.id === student.id) {
            student.isPresent = true;
          }
          return item;
        })
      );
    }
  };
  const absentHandler = (id) => {
    const student = props.students.find((item) => item.id === id);
    if (student.isPresent === true) {
      alert("The student is already prasent in the present list");
    } else if (student.isPresent === false) {
      alert("The student is already absent in the prasent list");
    } else if (student.isPresent === undefined) {
      props.setStudents(
        props.students.map((item) => {
          if (item.id === student.id) {
            student.isPresent = false;
          }
          return item;
        })
      );
    }
  };

  const deleteStudentHandler = (id) => {
    props.setStudents(props.students.filter((item) => item.id !== id));
  };

  const editStudentHandler = (id) => {
    const toBeEditedStudent = props.students.find((item) => item.id === id);
    props.setEditMode(true);
    props.setStudentName(toBeEditedStudent.name);
    props.setEditableStudent(toBeEditedStudent);
  };

  return (
    <div
      className="all-students"
      style={{ border: "2px solid black", padding: "5px" }}
    >
      <h4>All Students</h4>
      <ul>
        {props.students.map((student) => (
          <li>
            <span> {student.name}</span>
            <button onClick={() => editStudentHandler(student.id)}>
              Edit{" "}
            </button>
            <button onClick={() => deleteStudentHandler(student.id)}>
              Delete{" "}
            </button>
            <button onClick={() => presentHandler(student.id)}>Present </button>
            <button onClick={() => absentHandler(student.id)}>Absent </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllStudentList;

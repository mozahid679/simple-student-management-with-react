import AbsentStudentList from "./AbsentStudentList";
import AllStudent from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";

function StudentSection(props) {
  // const [students, setStudents] = useState([]);

  const toggleHandler = (id) => {
    const student = props.students.find((item) => item.id === id);
    props.setStudents(
      props.students.map((item) => {
        if (item.id === student.id) {
          item.isPresent = !item.isPresent;
        }
        return item;
      })
    );
  };

  return (
    <div
      className="students-section"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "25px 0",
        backgroundColor: "tomato",
      }}
    >
      <AllStudent
        editMode={props.editMode}
        setEditMode={props.setEditMode}
        editableStudent={props.editableStudent}
        setEditableStudent={props.setEditableStudent}
        students={props.students}
        setStudentName={props.setStudentName}
        setStudent={props.setStudent}
      />
      <PresentStudentList
        students={props.students}
        toggleHandler={toggleHandler}
      />
      <AbsentStudentList
        students={props.students}
        toggleHandler={toggleHandler}
      />
    </div>
  );
}

export default StudentSection;

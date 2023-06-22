import { useEffect, useState } from "react";
import { StudentsList } from "../components/StudentsList";
import { deleteStudent, fetchStudents } from "../services/students";
import { Heading, useToast } from "@chakra-ui/react";

export const HomePage = () => {
  const [students, setStudents] = useState([]);
  const toast = useToast();

  const onStudentDeleteHandler = async (id) => {
    await deleteStudent(id);
    fetchStudents().then(setStudents);

    toast({
      title: "Student deleted.",
      description: "We've delete student for you.",
      status: "success",
      duration: 3000,
      position: "top-right",
    });
  };

  const onStudentEditHandler = (student) => {
    // TODO update student data
  };

  useEffect(() => {
    fetchStudents().then(setStudents);
  }, []);

  return (
    <>
      <Heading size="2xl" mb={4}>
        Students List
      </Heading>
      <StudentsList
        students={students}
        onDelete={onStudentDeleteHandler}
        onEdit={onStudentEditHandler}
      />
    </>
  );
};

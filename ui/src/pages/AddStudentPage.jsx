import { Heading, useToast } from "@chakra-ui/react";
import { AddStudentForm } from "../components/AddStudentForm";
import { createStudent } from "../services/students";

export const AddStudentPage = () => {
  const toast = useToast();
  const onAddStudentHandler = async (firstName, lastName) => {
    await createStudent({ firstName, lastName });

    toast({
      title: "Student created.",
      description: "We've created a new student for you.",
      status: "success",
      duration: 3000,
      position: "top-right",
    });
  };

  return (
    <>
      <Heading size="2xl" mb={4}>
        Add Student
      </Heading>
      <AddStudentForm onClick={onAddStudentHandler} />
    </>
  );
};

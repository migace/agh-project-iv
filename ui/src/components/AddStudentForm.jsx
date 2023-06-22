import { Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

export const AddStudentForm = ({ onClick }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();

    onClick(firstName, lastName);
    setFirstName("");
    setLastName("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <VStack gap={4} alignItems="flex-start">
        <Input
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.currentTarget.value)}
        />
        <Input
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.currentTarget.value)}
        />
        <Button type="submit" colorScheme="whatsapp">Add</Button>
      </VStack>
    </form>
  );
};

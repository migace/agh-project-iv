import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Icon,
  Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { SlPencil } from "react-icons/sl";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export const StudentsList = ({ students = [], onDelete, onEdit }) => {
  const [data, setData] = useState(students);
  const [editRowId, setEditRowId] = useState(-1);

  useEffect(() => {
    setData(students);
  }, [students]);

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>First name</Th>
            <Th>Last name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((student) => (
            <Tr key={student.id}>
              <Td>
                {editRowId === student.id ? (
                  <Input
                    size="xs"
                    value={student.first_name}
                    onChange={(e) =>
                      setData((prev) =>
                        prev.map((s) =>
                          s.id === student.id
                            ? {
                                ...s,
                                first_name: e.target.value,
                              }
                            : s
                        )
                      )
                    }
                  />
                ) : (
                  student.first_name
                )}
              </Td>
              <Td>
                {editRowId === student.id ? (
                  <Input
                    size="xs"
                    value={student.last_name}
                    onChange={(e) =>
                      setData((prev) =>
                        prev.map((s) =>
                          s.id === student.id
                            ? {
                                ...s,
                                last_name: e.target.value,
                              }
                            : s
                        )
                      )
                    }
                  />
                ) : (
                  student.last_name
                )}
              </Td>
              <Td display="flex" gap={2}>
                {editRowId === student.id ? (
                  <>
                    <Icon
                      as={AiOutlineCheck}
                      color="green.300"
                      boxSize={5}
                      cursor="pointer"
                      onClick={() => {
                        onEdit(student);
                        setEditRowId(-1);
                      }}
                    />
                    <Icon
                      as={AiOutlineClose}
                      color="red.500"
                      boxSize={5}
                      cursor="pointer"
                      onClick={() => setEditRowId(-1)}
                    />
                  </>
                ) : (
                  <>
                    <Icon
                      as={SlPencil}
                      color="orange.300"
                      boxSize={5}
                      cursor="pointer"
                      onClick={() => setEditRowId(student.id)}
                    />
                    <Icon
                      as={IoTrashOutline}
                      color="red.500"
                      boxSize={5}
                      cursor="pointer"
                      onClick={() => onDelete(student.id)}
                    />
                  </>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

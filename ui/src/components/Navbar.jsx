import { Box, List, ListItem, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = () => (
  <Box bg="gray.600" py={4} px={8}>
    <nav>
      <List display="flex" gap={4}>
        <ListItem>
          <Link as={RouterLink} to="/" color="white">
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link as={RouterLink} to="/add-student" color="white">
            Add student
          </Link>
        </ListItem>
      </List>
    </nav>
  </Box>
);

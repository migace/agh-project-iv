import { Box, Container } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => (
  <Box>
    <Navbar />
    <Container maxW="4xl" py={8}>
      <Outlet />
    </Container>
  </Box>
);

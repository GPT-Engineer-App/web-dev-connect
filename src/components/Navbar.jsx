import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box as="nav" borderBottomWidth={1} borderBottomColor="gray.200" padding={4}>
      <Flex align="center" maxWidth="800px" margin="auto">
        <Link href="/" fontWeight="bold" fontSize="xl">
          Particles
        </Link>
        <Spacer />
        <Link href="/developers" marginLeft={4}>
          Developers
        </Link>
        <Link href="/about" marginLeft={4}>
          About
        </Link>
        <Link href="/contact" marginLeft={4}>
          Contact
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
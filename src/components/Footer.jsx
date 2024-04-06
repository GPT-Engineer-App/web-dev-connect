import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" borderTopWidth={1} borderTopColor="gray.200" marginTop={8} paddingTop={4} paddingBottom={8} textAlign="center">
      <Text fontSize="sm">&copy; {new Date().getFullYear()} Particles. All rights reserved.</Text>
      <Link href="/terms" fontSize="sm" marginLeft={4}>
        Terms of Service
      </Link>
      <Link href="/privacy" fontSize="sm" marginLeft={4}>
        Privacy Policy
      </Link>
    </Box>
  );
};

export default Footer;

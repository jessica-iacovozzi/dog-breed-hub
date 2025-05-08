import { Box, Link } from "@chakra-ui/react";

const SkipLinks = () => {
  return (
    <Box position="relative" zIndex={10}>
      <Link
        href="#main-content"
        position="absolute"
        left="0"
        top="-40px"
        height="40px"
        padding="8px 16px"
        background="rgba(66, 153, 225, 0.9)"
        color="white"
        _focus={{
          top: "0",
          outline: "2px solid",
          outlineColor: "blue.500",
        }}
        borderBottomRightRadius="md"
        transition="top 0.2s"
        fontWeight="bold"
      >
        Skip to main content
      </Link>
      <Link
        href="#navigation"
        position="absolute"
        left="160px"
        top="-40px"
        height="40px"
        padding="8px 16px"
        background="rgba(66, 153, 225, 0.9)"
        color="white"
        _focus={{
          top: "0",
          outline: "2px solid",
          outlineColor: "blue.500",
        }}
        borderBottomRightRadius="md"
        transition="top 0.2s"
        fontWeight="bold"
      >
        Skip to navigation
      </Link>
    </Box>
  );
};

export default SkipLinks;

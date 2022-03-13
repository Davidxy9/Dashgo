import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Davin William</Text>
          <Text color="gray.300" fontSize="small">
            davidwilliamlima@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="David William"
        src="https://avatars.githubusercontent.com/u/55166538?v=4"
      />
    </Flex>
  );
}
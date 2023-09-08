import React from "react";
import { Box, Flex, Text, SimpleGrid, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

export function TodosListHeader({ todosCount }: { todosCount: number }) {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box>
        <Text color={"green"}>Today</Text>
      </Box>
      <Flex>
        <IconButton
          variant="ghost"
          width="10px"
          border="0"
          height="30px"
          colorScheme="blue"
          aria-label="Call Sage"
          fontSize="10px"
          icon={<AddIcon />}
        />
        <Box border={"1px solid black"} borderRadius={4}>
          {todosCount}
        </Box>
      </Flex>
    </SimpleGrid>
  );
}

import React from "react";
import {
  Box,
  Card,
  CardBody,
  Checkbox,
  Flex,
  Stack,
  Text,
  VStack,
  SimpleGrid,
  Tag,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { useTodos } from "../entities/Todo/model";

export function TasksPage() {
  const { todos, setTodos } = useTodos();

  return (
    <Flex justify="center">
      <Stack
        // sx={{
        //   "&::-webkit-scrollbar": {
        //     width: "16px",
        //     borderRadius: "8px",
        //     backgroundColor: `rgba(0, 0, 0, 0.05)`,
        //   },
        //   "&::-webkit-scrollbar-thumb": {
        //     backgroundColor: `rgba(0, 0, 0, 0.05)`,
        //   },
        // }}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        overflowY="auto"
        width="21vw"
        height="90vh"
      >
        <SimpleGrid columns={2} spacing={10}>
          <Box> Today</Box>
          <Flex >
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<AddIcon />}
            />
            <Box border={"4px thick black"}>
            {todos.length}
            </Box>
          </Flex>
        </SimpleGrid>
        {todos.map((todoItem) => (
          <Card width="20vw" marginLeft="5px" border={"1px solid blue"}>
            <CardBody>
              <Flex>
                <Checkbox isChecked={todoItem.completed} />
                <Text color="blue">{todoItem.title}</Text>
              </Flex>
              <SimpleGrid columns={2} spacing={10}>
                <Box> 2021-01-01</Box>
                <Box> 2023-02-02</Box>
              </SimpleGrid>
              <Text>asldfj;alsdfkjasldfj alsdfjk;lasdjfk</Text>
              <SimpleGrid columns={2} spacing={10}>
                <Box> <Tag colorScheme="purple">Sample</Tag>
                <Tag colorScheme="gray">Tag</Tag></Box>
                <Box> <Avatar size='xs' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' /></Box>
              </SimpleGrid>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </Flex>
  );
}

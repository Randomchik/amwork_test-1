import React from "react";
import {
  Box,
  Card,
  CardBody,
  Checkbox,
  Flex,
  Text,
  SimpleGrid,
  Tag,
  Avatar,
} from "@chakra-ui/react";

import { TTodo } from "./model";

export function TodoEntity({ todo }: { todo: TTodo }) {
  return (
    <Card width="20vw" marginLeft="5px" border={"1px solid blue"}>
      <CardBody>
        <Flex>
          <Checkbox isChecked={todo.completed} />
          <Text noOfLines={[1, 2, 3]} color="blue">
            {todo.title}
          </Text>
        </Flex>
        {/* <SimpleGrid columns={2} spacing={10}>
                <Box> {todoItem.start}</Box>
                <Box> {todoItem.end}</Box>
              </SimpleGrid> */}
        <Text noOfLines={[1]}>{todo.description}</Text>
        <SimpleGrid columns={2} spacing={10}>
          <Box>
            <Tag colorScheme="purple">{todo.tag1}</Tag>
            <Tag colorScheme="gray">{todo.tag2}</Tag>
          </Box>
          <Box>
            <Avatar size="xs" name="Avatar" src="https://bit.ly/dan-abramov" />
          </Box>
        </SimpleGrid>
      </CardBody>
    </Card>
  );
}

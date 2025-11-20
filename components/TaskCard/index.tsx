'use client'

import { Avatar, Box, Flex, Icon, Span, Text } from "@chakra-ui/react";
import { Calendar, Flag, ProfileCircle } from "iconsax-reactjs";


import { Todo } from "../CreateTodoDialog";
import { PRIORITY_MAP } from "../CreateTodoDialog/PrioritySelect";


type TaskCardProps = {
    todo: Todo
}

export default function TaskCard({ todo, ...props }: TaskCardProps) {

    return (
        <Box cursor={"pointer"} bg={"white"} rounded={"10px"} p={"4"} mb={"3"} {...props}>
            <Text color={"#464B50"} fontWeight={600} fontSize={"14px"} mb={2}>{todo.name}</Text>

            <Flex gap={"3"} mb={"3"}>
                <Icon>
                    <Calendar size="20" color="#BAC1CC" />
                </Icon>

                <Text fontWeight={400} fontSize={"14px"}>04/06/2024 - 16/06/2014</Text>

            </Flex>
            <Flex alignItems={'center'} gap={"3"} mb={"3"}>
                <Icon>
                    <ProfileCircle size="20" color="#BAC1CC" />
                </Icon>

                <Flex align="center">
                    {todo.assigned_to.length < 1 ? "Select Assignee" : ''}
                    {todo.assigned_to.slice(0, 2).map((person, i) => (
                        <Avatar.Root
                            key={person.id}
                            size="2xs"
                            borderWidth="3px"
                            borderColor="white"
                            ml={i === 0 ? 0 : "-5px"}
                        >
                            <Avatar.Fallback name={person.name} />
                            <Avatar.Image src={person.img} />
                        </Avatar.Root>
                    ))}

                    {todo.assigned_to.length > 2 && (
                        <Span
                            bg="#F6ECFF"
                            rounded="full"
                            borderWidth="3px"
                            borderColor="white"
                            px="8px"
                            py="4px"
                            ml="-5px"
                            fontSize="xs"
                        >
                            +{todo.assigned_to.length - 2}
                        </Span>
                    )}
                </Flex>
            </Flex>
            <Flex alignItems={'center'} gap={"3"} mb={"3"}>
                <Icon>
                    <Flag size="20" color={PRIORITY_MAP[todo.priority].color} variant={'Bold'} />
                </Icon>

                <Text color={"#464B50"} fontWeight={600} fontSize={"14px"}>{PRIORITY_MAP[todo.priority].label}</Text>

            </Flex>

        </Box>
    )
}
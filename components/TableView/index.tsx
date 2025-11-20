'use client'

import {
    Box,
    Button,
    Flex,
    Icon,
    IconButton,
    Popover,
    Portal,
    Span,
    Table,
    Text,
} from "@chakra-ui/react";


import { useTodos } from '@/contexts/TodoContext';
import { PRIORITY_MAP } from "../CreateTodoDialog/PrioritySelect";
import { AvatarGroup } from "../AvatarGroup";
import { Flag, Status, TaskSquare, TickCircle } from "iconsax-reactjs";
import { FaEllipsis } from "react-icons/fa6";
import ViewTodo from "../TaskCard";
import CreateTodo from "../CreateTodoDialog";
import { useMemo } from "react";


export function TableView() {
    const { todos } = useTodos();


    const todosToDo = useMemo(
        () => todos.filter(t => t.status === "to_do"),
        [todos]
    );

    const todosInProgress = useMemo(
        () => todos.filter(t => t.status === "in_progress"),
        [todos]
    );

    const todosComplete = useMemo(
        () => todos.filter(t => t.status === "complete"),
        [todos]
    );

    return (
        <>
            <Flex alignItems={"center"} bg={"#F7F7F7"} p={"2"} gap="3" rounded={"6px"} mb={"4"}>
                <Button bg={"white"} w={"180px"} px={"1"}>
                    <Flex justifyContent={"space-between"} w={"full"} >
                        <Flex alignItems={"center"} gap={"3"}>
                            <TaskSquare size="20px"
                                color="#CFB7E8" variant="Bold" />
                            <Text fontSize={"14px"} color={"#464B50"}>To Do</Text>
                        </Flex>

                        <Span bg={"#F9F3FF"} p={"1"} color={"#464B50"} rounded={"6px"} fontSize={"sm"}>({todosToDo.length})</Span>
                    </Flex>

                </Button>
                <Button bg={"white"} w={"180px"} px={"1"}>
                    <Flex justifyContent={"space-between"} w={"full"} >
                        <Flex alignItems={"center"} gap={"3"}>
                            <Status size="20px"
                                color="#F6BE38" variant="Bold" />
                            <Text fontSize={"14px"} color={"#464B50"}>In Progress</Text>
                        </Flex>

                        <Span bg={"#FBF4E4"} p={"1"} color={"#464B50"} rounded={"6px"} fontSize={"sm"}>({todosInProgress.length})</Span>
                    </Flex>

                </Button>
                <Button bg={"white"} w={"180px"} px={"1"}>
                    <Flex justifyContent={"space-between"} w={"full"} >
                        <Flex alignItems={"center"} gap={"3"}>
                            <TickCircle size="20px"
                                color="#75C5C1" variant="Bold" />
                            <Text fontSize={"14px"} color={"#464B50"}>Completed</Text>
                        </Flex>

                        <Span bg={"#E9F5F7"} p={"1"} color={"#464B50"} rounded={"6px"} fontSize={"sm"}>({todosComplete.length})</Span>
                    </Flex>

                </Button>
            </Flex>

            <Box border="1px solid" borderColor="#CDD6E9" rounded="md" overflow="hidden">
                <Table.Root key={'outline'} size="sm" variant={"outline"} rounded={"10px"}>
                    <Table.Header >
                        <Table.Row >
                            <Table.ColumnHeader p={"5"} borderRightWidth={"2px"} borderRightColor={"#CDD6E999"}>Name</Table.ColumnHeader>
                            <Table.ColumnHeader borderRightWidth={"2px"} borderRightColor={"#CDD6E999"}>Date</Table.ColumnHeader>
                            <Table.ColumnHeader borderRightWidth={"2px"} borderRightColor={"#CDD6E999"}>Assignee</Table.ColumnHeader>
                            <Table.ColumnHeader>Priority</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {todos.length === 0 ? (
                            <Table.Row>
                                <Table.Cell colSpan={3} textAlign="center" py="10" color="gray.500">
                                    No results found
                                </Table.Cell>
                            </Table.Row>
                        ) : todos.map((item) => (
                            <Table.Row key={item.id} borderColor="#CDD6E9">
                                <Table.Cell p={"5"} borderColor={"#CDD6E9"} outlineColor={"#CDD6E9"} color={"#464B50"} fontWeight={"600"}>{item.name}</Table.Cell>
                                <Table.Cell color={"#464B50"} fontWeight={"500"}>04/06/2024 - 16/06/2014</Table.Cell>
                                <Table.Cell ><AvatarGroup item={item} /></Table.Cell>
                                <Table.Cell >
                                    <Flex justifyContent={"space-between"} alignItems={"center"}>
                                        <Flex alignItems={'center'} gap={"3"} mb={"3"}>
                                            <Icon>
                                                <Flag size="20" color={PRIORITY_MAP[item.priority].color} variant={'Bold'} />
                                            </Icon>

                                            <Text color={"#464B50"} fontWeight={600} fontSize={"14px"}>{PRIORITY_MAP[item.priority].label}</Text>

                                        </Flex>


                                        <Popover.Root>
                                            <Popover.Trigger asChild>
                                                <IconButton h={'auto'} p={"1"} bg={"#F7F7F7"}><FaEllipsis color="#6C7278" /></IconButton>

                                            </Popover.Trigger>
                                            <Portal>
                                                <Popover.Positioner>
                                                    <Popover.Content w={"150px"}>
                                                        <Popover.Arrow />
                                                        <Popover.Body>
                                                            <ul>
                                                                <li>
                                                                    <CreateTodo trigger={<Button w={"full"} mb={"2"} bg={"none"} color={"#464B50"} justifyContent={"start"} p={"1"}>Edit Task</Button>}
                                                                        todo={item} />

                                                                </li>
                                                                {/* <li>
                                                                <Button w={"full"} mb={"2"} bg={"none"} color={"#464B50"} justifyContent={"start"} p={"1"}>Edit todo</Button>
                                                            </li> */}
                                                            </ul>
                                                        </Popover.Body>
                                                    </Popover.Content>
                                                </Popover.Positioner>
                                            </Portal>
                                        </Popover.Root>
                                    </Flex>

                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </Box>
        </>

    )
}

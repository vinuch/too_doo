'use client'

import {
    Box,
    Flex,
    Icon,
    IconButton,
    Table,
    Text,
} from "@chakra-ui/react";

import { flexRender } from "@tanstack/react-table";
import {
    createColumnHelper,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { useTodos } from '@/contexts/TodoContext';
import { PRIORITY_MAP } from "../CreateTodoDialog/PrioritySelect";
import { AvatarGroup } from "../AvatarGroup";
import { Flag } from "iconsax-reactjs";
import { FaEllipsis } from "react-icons/fa6";


export function TableView() {
    const { todos } = useTodos();

    return (
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

                                    <IconButton h={'auto'} p={"1"} bg={"#F7F7F7"}><FaEllipsis color="#6C7278" /></IconButton>
                                </Flex>

                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Box>
    )
}

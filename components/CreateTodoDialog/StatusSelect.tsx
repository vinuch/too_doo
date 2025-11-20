'use client'

import { Button, Flex, Input, Popover, Portal, Text } from "@chakra-ui/react"
import { Status, TaskSquare, TickCircle } from "iconsax-reactjs"
import { JSX, SetStateAction, useEffect, useState } from "react";
import { Todo } from ".";


type StatusSelectProps = {
    todo: Todo;
    setTodo: (value: SetStateAction<Todo>) => void;
}


export default function StatusSelect({ todo, setTodo }: StatusSelectProps) {
    const [selectedStatus, setSelectedStatus] = useState<Status>(todo.status);
    const [selectedStatusProps, setSelectedStatusProps] = useState({
        label: "To Do",
        color: "#CFB7E8",
        icon: <TaskSquare size="32" color="#FFFFFF" variant="Bold" />
    });

    type Status = "to_do" | "in_progress" | "complete";

    const STATUS_MAP: Record<Status, {
        label: string;
        color: string;
        icon: JSX.Element;
    }> = {
        to_do: {
            label: "To Do",
            color: "#CFB7E8",
            icon: <TaskSquare size="32" color="#FFFFFF" variant="Bold" />,
        },
        in_progress: {
            label: "In Progress",
            color: "#F6BE38",
            icon: <Status size="32" color="#FFFFFF" variant="Bold" />,
        },
        complete: {
            label: "Complete",
            color: "#75C5C1",
            icon: <TickCircle size="32" color="#FFFFFF" variant="Bold" />,
        },
    };

    useEffect(() => {
        if (STATUS_MAP[selectedStatus]) {
            setSelectedStatusProps(STATUS_MAP[selectedStatus]);

        }
        setTodo({ ...todo, status: selectedStatus })
    }, [selectedStatus]);

    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button bg={selectedStatusProps.color} size={"xs"} rounded={"6px"}>
                    {selectedStatusProps.icon}
                    <Text>{selectedStatusProps.label}</Text>
                </Button>
            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content w={"200px"} rounded={"10px"} borderWidth={"1px"} borderColor={"#CDD6E9"}>
                        {/* <Popover.Arrow /> */}
                        <Popover.Body>
                            <ul>
                                <li>
                                    <Button w={"full"} justifyContent={"start"} variant={"plain"} onClick={() => setSelectedStatus("to_do")}>
                                        <Flex alignItems={"center"} gap={"3"}>
                                            <TaskSquare size="20px"
                                                color="#CFB7E8" variant="Bold" />
                                            <Text fontSize={"14px"} color={"#464B50"}>To Do</Text>
                                        </Flex>
                                    </Button>

                                </li>
                                <li>
                                    <Button w={"full"} justifyContent={"start"} variant={"plain"} onClick={() => setSelectedStatus("in_progress")}>
                                        <Flex alignItems={"center"} gap={"3"}>
                                            <Status size="20px"
                                                color="#F6BE38" variant="Bold" />
                                            <Text fontSize={"14px"} color={"#464B50"}>In Progress</Text>
                                        </Flex>
                                    </Button>

                                </li>
                                <li>
                                    <Button w={"full"} justifyContent={"start"} variant={"plain"} onClick={() => setSelectedStatus("complete")}>
                                        <Flex alignItems={"center"} gap={"3"}>
                                            <TickCircle size="20px"
                                                color="#75C5C1" variant="Bold" />
                                            <Text fontSize={"14px"} color={"#464B50"}>Complete</Text>
                                        </Flex>
                                    </Button>

                                </li>
                            </ul>
                        </Popover.Body>
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
}
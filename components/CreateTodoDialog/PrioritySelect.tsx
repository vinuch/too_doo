'use client'
import { Button, Flex, Icon, Input, Popover, Portal, Text, Box } from "@chakra-ui/react"
import { Flag, Status, TaskSquare, TickCircle } from "iconsax-reactjs"
import { SetStateAction, useEffect, useState } from "react";
import { Todo } from ".";


type PrioritySelectProps = {
    todo: Todo;
    setTodo: (value: SetStateAction<Todo>) => void;
}

export default function PrioritySelect({ todo, setTodo }: PrioritySelectProps) {
    const [selectedStatus, setSelectedStatus] = useState<Priority>(todo.priority);
    const [selectedPriorityProps, setSelectedPriorityProps] = useState<{
        label: string;
        color: string;
    } | undefined>();

    type Priority = "urgent" | "important" | "normal" | "low";

    const PRIORITY_MAP: Record<Priority, {
        label: string;
        color: string;
    }> = {
        urgent: {
            label: "Urgent",
            color: "#FF515D",
        },
        important: {
            label: "Important",
            color: "#F6BE38",
        },
        normal: {
            label: "Normal",
            color: "#75C5C1",
        },
        low: {
            label: "Low",
            color: "#BAC1CC",
        },
    };

    useEffect(() => {
        if (selectedStatus && PRIORITY_MAP[selectedStatus]) {
            setSelectedPriorityProps(PRIORITY_MAP[selectedStatus]);

        }

        setTodo({ ...todo, priority: selectedStatus })

    }, [selectedStatus]);


    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Flex justifyContent={"space-between"} w={"45%"} mb={"3"}>
                    <Flex alignItems={"center"} gapX={"2"} w={"100px"}>
                        <Icon>
                            <Flag size="20" color={selectedPriorityProps?.color} variant={selectedPriorityProps?.label ? 'Bold' : 'Outline'} />
                        </Icon>

                        <Text>Priority</Text>
                    </Flex>

                    <Box w={"120px"}>
                        <Button variant="plain" p={"0"} color={selectedPriorityProps?.label ? "#464B50" : "#BAC1CC"} fontWeight={selectedPriorityProps?.label ? "500" : "400"}>{selectedPriorityProps?.label ? selectedPriorityProps?.label : "Select Priority"}</Button>

                    </Box>
                </Flex>
            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content w={"200px"} rounded={"10px"} borderWidth={"1px"} borderColor={"#CDD6E9"}>
                        {/* <Popover.Arrow /> */}
                        <Popover.Body>
                            <ul>
                                <li>
                                    <Button w={"full"} justifyContent={"start"} variant={"plain"} onClick={() => setSelectedStatus("urgent")}>
                                        <Flex alignItems={"center"} gap={"3"}>
                                            <Flag size="20px"
                                                color="#FF515D" variant="Bold" />
                                            <Text fontSize={"14px"} color={"#464B50"}>Urgent</Text>
                                        </Flex>
                                    </Button>

                                </li>
                                <li>
                                    <Button w={"full"} justifyContent={"start"} variant={"plain"} onClick={() => setSelectedStatus("important")}>
                                        <Flex alignItems={"center"} gap={"3"}>
                                            <Flag size="20px"
                                                color="#F6BE38" variant="Bold" />
                                            <Text fontSize={"14px"} color={"#464B50"}>Important</Text>
                                        </Flex>
                                    </Button>

                                </li>
                                <li>
                                    <Button w={"full"} justifyContent={"start"} variant={"plain"} onClick={() => setSelectedStatus("normal")}>
                                        <Flex alignItems={"center"} gap={"3"}>
                                            <Flag size="20px"
                                                color="#75C5C1" variant="Bold" />
                                            <Text fontSize={"14px"} color={"#464B50"}>Normal</Text>
                                        </Flex>
                                    </Button>

                                </li>
                                <li>
                                    <Button w={"full"} justifyContent={"start"} variant={"plain"} onClick={() => setSelectedStatus("low")}>
                                        <Flex alignItems={"center"} gap={"3"}>
                                            <Flag size="20px"
                                                color="#BAC1CC" variant="Bold" />
                                            <Text fontSize={"14px"} color={"#464B50"}>Low</Text>
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
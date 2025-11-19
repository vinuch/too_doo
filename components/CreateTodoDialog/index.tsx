'use client'

import { Box, Button, CloseButton, Dialog, Flex, Icon, Input, Portal, Text, Textarea } from "@chakra-ui/react";
import { AddCircle, Calendar, Flag, ProfileCircle, Status, Stickynote, TaskSquare } from "iconsax-reactjs";
import StatusSelect from "./StatusSelect";
import PrioritySelect from "./PrioritySelect";
import AssigneeSelect from "./AssigneeSelect";
import { JSX, ReactNode, useState } from "react";
import { useTodos } from "@/contexts/TodoContext";
import { toaster } from "../ui/toaster";


export type Person = {
    id: number;
    name: string;
    img: string;
}

export type Todo = {
    id: string,
    name: string
    status: "to_do" | "in_progress" | "complete"
    date: string
    assigned_to: Person[]
    priority: "urgent" | "important" | "normal" | "low";
    description: string
}

type CreateTodoProps = {
    trigger: ReactNode
}
export default function CreateTodo({ trigger }: CreateTodoProps) {
    const { addTodo } = useTodos();
    const [todo, setTodo] = useState<Todo>({
        id: "",
        name: "",
        status: "to_do",
        date: "",
        assigned_to: [],
        priority: "urgent",
        description: "",
    })
    return (
        <Dialog.Root
            placement={"center"}
            motionPreset="slide-in-bottom"
            size={"lg"}
        >
            <Dialog.Trigger asChild>

                {trigger}
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content rounded={"20px"}>
                        <Dialog.Header>
                            {/* <Dialog.Title>Dialog Title</Dialog.Title> */}
                        </Dialog.Header>
                        <Dialog.Body>
                            <Input type={"text"} placeholder="Task Name" fontSize={"30px"} p={"2"} outline={"none"} mb={"5"} border={"none"} onChange={e => setTodo({ ...todo, name: e.target.value })} />

                            <Flex justifyContent={"space-between"} w={"45%"} mb={"3"}>
                                <Flex alignItems={"center"} gapX={"2"} w={"100px"}>
                                    <Icon>
                                        <Status size="20" color="#BAC1CC" />
                                    </Icon>

                                    <Text>Status</Text>
                                </Flex>

                                <Box w={"120px"} >

                                    <StatusSelect todo={todo} setTodo={setTodo} />
                                </Box>
                            </Flex>
                            <Flex justifyContent={"space-between"} w={"45%"} mb={"3"}>
                                <Flex alignItems={"center"} gapX={"2"} w={"100px"}>
                                    <Icon>
                                        <Calendar size="20" color="#BAC1CC" />
                                    </Icon>

                                    <Text>Dates</Text>
                                </Flex>

                                <Box w={"120px"} textAlign={"left"}>
                                    <Button variant="plain" p={"0"} color={"#BAC1CC"} fontWeight={"400"}>00 / 00 / 0000</Button>

                                </Box>

                            </Flex>
                            <Flex justifyContent={"space-between"} w={"45%"} mb={"3"}>
                                <Flex alignItems={"center"} gapX={"2"} w={"100px"}>
                                    <Icon>
                                        <ProfileCircle size="20" color="#BAC1CC" />
                                    </Icon>

                                    <Text>Assignees</Text>
                                </Flex>

                                <Box w={"120px"}>
                                    <AssigneeSelect todo={todo} setTodo={setTodo} />
                                </Box>
                            </Flex>

                            <PrioritySelect todo={todo} setTodo={setTodo} />

                            <Flex mb={"3"} justifyContent={"space-between"} w={"45%"}>
                                <Flex alignItems={"center"} gapX={"2"} w={"100px"}>
                                    <Icon>
                                        <Stickynote size="20" color="#BAC1CC" />
                                    </Icon>

                                    <Text>Description</Text>
                                </Flex>


                            </Flex>


                            <Textarea placeholder="Write something or type" minH={"150px"} bg={"grayBg"} borderWidth={"1px"} borderColor={"#EEF1F9"} outline={"none"} mt={"2"} onChange={e => setTodo({ ...todo, description: e.target.value })} />

                        </Dialog.Body>
                        <Dialog.Footer>
                            {/* <Dialog.ActionTrigger asChild>
                                <Button bg={"primary"} px={"10"}>Create Task</Button>
                            </Dialog.ActionTrigger> */}
                            {/* <Button>Save</Button> */}
                            <Button bg={"primary"} px={"10"} onClick={() => {
                                //    console.log(todo) 
                                addTodo({ ...todo, id: crypto.randomUUID() })
                                toaster.create({
                                    description: "Todo created successfully",
                                    type: "info",
                                })

                            }}>Create Task</Button>

                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}
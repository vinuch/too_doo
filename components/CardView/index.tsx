import { Avatar, Box, Button, Flex, Icon, IconButton, Span, Text } from "@chakra-ui/react";
import { Add, Calendar, Flag, ProfileCircle, Status, TaskSquare, TickCircle } from "iconsax-reactjs";
import { PRIORITY_MAP } from "../CreateTodoDialog/PrioritySelect";
import CreateTodo, { Todo } from "../CreateTodoDialog";
import { useMemo } from "react";
import { useTodos } from "@/contexts/TodoContext";
import TaskCard from "../TaskCard";

export function CardView() {
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
        <Flex justifyContent={"space-between"} alignItems={'start'}>
            <Box rounded={"6px"} w="32%" bg={"#F7F7F7"}>
                <Flex bg={"#F9F3FF"} rounded={"6px"} p={"3"}>
                    {/* <Button w={"180px"} px={"1"}> */}
                    <Box w={"full"}>
                        <Flex justifyContent={"space-between"}>
                            <Flex alignItems={'center'} gap={"2"} w={"full"} >
                                <Flex bg={"white"} p="1" rounded={"6px"} alignItems={"center"} gap={"2"}>
                                    <TaskSquare size="20px"
                                        color="#CFB7E8" variant="Bold" />
                                    <Text fontSize={"14px"} color={"#464B50"}>To Do</Text>
                                </Flex>

                                <Span bg={"white"} p="1" rounded={"6px"} color={"#464B50"} fontSize={"xs"} >({todosToDo.length})</Span>
                            </Flex>


                            <CreateTodo trigger={
                                <IconButton bg={"white"} size={"xs"} p={"0"}>
                                    <Add size="32" color="#292D32" />
                                </IconButton>
                            } />
                        </Flex>

                    </Box>


                    {/* </Button> */}
                </Flex>

                <Box p={"2"}>
                    {
                        todosToDo.map(item => (
                            <CreateTodo key={`${item.id}-${item.name}`} trigger={<TaskCard todo={item} />} todo={item} />

                        ))
                    }
                    <CreateTodo trigger={<Button bg={"white"} w={"full"} p={"0"} justifyContent={"start"} px={"3"}>
                        <Add size="32" color="#464B50" />
                        <Text color={"#464B50"}>Add Task</Text>
                    </Button>} />
                </Box>
            </Box>
            <Box rounded={"6px"} w="32%" bg={"#F7F7F7"}>
                <Flex bg={"#FBF4E4"} rounded={"6px"} p={"3"}>
                    {/* <Button w={"180px"} px={"1"}> */}
                    <Box w={"full"}>
                        <Flex justifyContent={"space-between"}>
                            <Flex alignItems={'center'} gap={"2"} w={"full"} >
                                <Flex bg={"white"} p="1" rounded={"6px"} alignItems={"center"} gap={"2"}>
                                    <Status size="20px"
                                        color="#F6BE38" variant="Bold" />
                                    <Text fontSize={"14px"} color={"#464B50"}>In Progress</Text>
                                </Flex>

                                <Span bg={"white"} p="1" rounded={"6px"} color={"#464B50"} fontSize={"xs"} >({todosInProgress.length})</Span>
                            </Flex>

                            <CreateTodo trigger={
                                <IconButton bg={"white"} size={"xs"} p={"0"}>
                                    <Add size="32" color="#292D32" />
                                </IconButton>
                            } />
                        </Flex>

                    </Box>


                    {/* </Button> */}
                </Flex>

                <Box p={"2"}>
                    {
                        todosInProgress.map(item => (
                            <CreateTodo key={`${item.id}-${item.name}`} trigger={<TaskCard todo={item} />} todo={item} />

                        ))
                    }

                    <CreateTodo trigger={<Button bg={"white"} w={"full"} p={"0"} justifyContent={"start"} px={"3"}>
                        <Add size="32" color="#464B50" />
                        <Text color={"#464B50"}>Add Task</Text>
                    </Button>} />
                </Box>
            </Box>
            <Box rounded={"6px"} w="32%" bg={"#F7F7F7"}>
                <Flex bg={"#E9F5F7"} rounded={"6px"} p={"3"}>
                    {/* <Button w={"180px"} px={"1"}> */}
                    <Box w={"full"}>
                        <Flex justifyContent={"space-between"}>
                            <Flex alignItems={'center'} gap={"2"} w={"full"} >
                                <Flex bg={"white"} p="1" rounded={"6px"} alignItems={"center"} gap={"2"}>
                                    <TickCircle size="20px"
                                        color="#75C5C1" variant="Bold" />
                                    <Text fontSize={"14px"} color={"#464B50"}>Completed</Text>
                                </Flex>

                                <Span bg={"white"} p="1" rounded={"6px"} color={"#464B50"} fontSize={"xs"} >({todosComplete.length})</Span>
                            </Flex>

                            <CreateTodo trigger={
                                <IconButton bg={"white"} size={"xs"} p={"0"}>
                                    <Add size="32" color="#292D32" />
                                </IconButton>
                            } />
                        </Flex>

                    </Box>


                    {/* </Button> */}
                </Flex>

                <Box p={"2"}>
                    {
                        todosComplete.map(item => (
                            <CreateTodo key={`${item.id}-${item.name}`} trigger={<TaskCard todo={item} />} todo={item} />

                        ))
                    }

                    <CreateTodo trigger={<Button bg={"white"} w={"full"} p={"0"} justifyContent={"start"} px={"3"}>
                        <Add size="32" color="#464B50" />
                        <Text color={"#464B50"}>Add Task</Text>
                    </Button>} />


                </Box>
            </Box>

        </Flex>
    )
}
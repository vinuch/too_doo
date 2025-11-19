import { Box, Button, CloseButton, Dialog, Flex, Icon, Input, Portal, Text, Textarea } from "@chakra-ui/react";
import { AddCircle, Calendar, Flag, ProfileCircle, Status, Stickynote, TaskSquare } from "iconsax-reactjs";
import StatusSelect from "./StatusSelect";
import PrioritySelect from "./PrioritySelect";
import AssigneeSelect from "./AssigneeSelect";

export default function CreateTodo() {

    return (
        <Dialog.Root
            placement={"center"}
            motionPreset="slide-in-bottom"
            size={"lg"}
        >
            <Dialog.Trigger asChild>
                <Button bg={"primary"} rounded={"10px"}><AddCircle size="32" color="#FFFFFF" />Add Task</Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content rounded={"20px"}>
                        <Dialog.Header>
                            {/* <Dialog.Title>Dialog Title</Dialog.Title> */}
                        </Dialog.Header>
                        <Dialog.Body>
                            <Input type={"text"} placeholder="Task Name" fontSize={"30px"} p={"2"} outline={"none"} mb={"5"} border={"none"} />

                            <Flex justifyContent={"space-between"} w={"45%"} mb={"3"}>
                                <Flex alignItems={"center"} gapX={"2"} w={"100px"}>
                                    <Icon>
                                        <Status size="20" color="#BAC1CC" />
                                    </Icon>

                                    <Text>Status</Text>
                                </Flex>

                                <Box w={"120px"} >

                                    <StatusSelect />
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
                                    <AssigneeSelect />
                                </Box>
                            </Flex>

                            <PrioritySelect />

                            <Flex mb={"3"} justifyContent={"space-between"} w={"45%"}>
                                <Flex alignItems={"center"} gapX={"2"} w={"100px"}>
                                    <Icon>
                                        <Stickynote size="20" color="#BAC1CC" />
                                    </Icon>

                                    <Text>Description</Text>
                                </Flex>


                            </Flex>


                            <Textarea placeholder="Write something or type" minH={"150px"} bg={"grayBg"} borderWidth={"1px"} borderColor={"#EEF1F9"} outline={"none"} mt={"2"} />

                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button bg={"primary"} px={"10"}>Create Task</Button>
                            </Dialog.ActionTrigger>
                            {/* <Button>Save</Button> */}
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
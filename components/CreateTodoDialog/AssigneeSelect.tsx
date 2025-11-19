'use client'
import { Button, Flex, Icon, Input, Popover, Portal, Text, Box, InputGroup, Avatar, Span } from "@chakra-ui/react"
import { Flag, SearchNormal1, Status, TaskSquare, TickCircle } from "iconsax-reactjs"
import { useEffect, useState } from "react";

type Person = {
    id: number;
    name: string;
    img: string;
}
export default function AssigneeSelect() {
    const [selectedAssignees, setSelectedAssignees] = useState<Person[]>([]);



    const people = [
        {
            id: 1,
            name: "Maria Vertrovs",
            img: "/person1.jpg"
        },
        {
            id: 2,
            name: "Adison Mango",
            img: "/person2.jpg"
        },
        {
            id: 3,
            name: "Gustavo Culhane",
            img: "/person3.jpg"
        },
        {
            id: 4,
            name: "Adison Bator",
            img: "/person4.jpg"
        },
        {
            id: 5,
            name: "Zaire George",
            img: "/person5.jpg"
        },

    ]



    return (
        <Popover.Root>
            <Popover.Trigger asChild>
                <Button variant="plain" p={"0"} color={"#BAC1CC"} fontWeight={"400"}>

                    <Flex align="center">
                        {selectedAssignees.length < 1 ? "Select Assignee" : ''}
                        {selectedAssignees.slice(0, 2).map((person, i) => (
                            <Avatar.Root
                                key={person.id}
                                size="sm"
                                borderWidth="3px"
                                borderColor="white"
                                ml={i === 0 ? 0 : "-5px"}
                            >
                                <Avatar.Fallback name={person.name} />
                                <Avatar.Image src={person.img} />
                            </Avatar.Root>
                        ))}

                        {selectedAssignees.length > 2 && (
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
                                +{selectedAssignees.length - 2}
                            </Span>
                        )}
                    </Flex>


                </Button>

            </Popover.Trigger>
            <Portal>
                <Popover.Positioner>
                    <Popover.Content w={"300px"} rounded={"10px"} borderWidth={"1px"} borderColor={"#CDD6E9"}>
                        {/* <Popover.Arrow /> */}
                        <Popover.Body>
                            <InputGroup startAddon={<SearchNormal1 size={14} color="#6C7278" />}>
                                <Input type="text" placeholder="Search user" bg={"#EEF1F9"} outline={"none"} border={"none"} />
                            </InputGroup>
                            <Box overflowY={"scroll"} maxH={"320px"} >
                                <ul>
                                    {people.map(person => (
                                        <li key={person.id} >
                                            <Button my={"2"} w={"full"} p={"0"} justifyContent={"start"} variant={"plain"} onClick={() => {
                                                setSelectedAssignees(prev =>
                                                    prev.some(p => p.id === person.id)
                                                        ? prev.filter(p => p.id !== person.id)
                                                        : [...prev, person]
                                                );
                                            }}>
                                                <Flex alignItems={"center"} gap={"3"} justifyContent={"space-between"} w={"full"}>
                                                    <Flex alignItems={"center"} gap={"3"}>
                                                        <Avatar.Root size={"xs"}>
                                                            <Avatar.Fallback name={person.name} />
                                                            <Avatar.Image src={person.img} />
                                                        </Avatar.Root>

                                                        <Text fontSize={"14px"} color={"#464B50"}>{person.name}</Text>
                                                    </Flex>
                                                    {selectedAssignees.find(p => p.id === person.id) && (
                                                        <TickCircle size="32" color="#75C5C1" variant="Bold" />
                                                    )}
                                                </Flex>
                                            </Button>

                                        </li>
                                    ))}


                                </ul>
                            </Box>

                        </Popover.Body>
                    </Popover.Content>
                </Popover.Positioner>
            </Portal>
        </Popover.Root>
    )
}
import CreateTodo from "@/components/CreateTodoDialog";
import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar";
import { Box, Button, ButtonGroup, Flex, IconButton, Input, InputGroup, Span, Stack, Text } from "@chakra-ui/react";
import { AddCircle, ArrowCircleLeft2, Calendar, ExportCurve, RowHorizontal, RowVertical, SearchNormal1, Sort, Status, TaskSquare, TickCircle } from "iconsax-reactjs";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
      <Flex alignItems={"start"}>
        <Sidebar />
        <Stack w={"full"}>
          <Nav />

          <Box mx={"6"} my={"5"} bg={"white"} rounded={"10px"} h={"80vh"}>


            <Box divideY="1px" divideColor="borders.subtle">
              <Flex p={"5"} alignItems={"center"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} gap={"5"}>
                  <IconButton borderWidth={"1px"} borderColor={"borders.subtle"} rounded={"full"} bg={"white"}>
                    <ArrowCircleLeft2 size="32" color="#464B50" />
                  </IconButton>
                  <Text fontWeight={"700"} fontSize={"30px"}>
                    Afdeling kwaliteit
                  </Text>
                </Flex>

                <Flex gap={"3"}>
                  <IconButton borderWidth={"1px"} rounded={"10px"} borderColor={"#CDD6E933"} bg={"grayBg"}>
                    <Sort size="32" color="#292D32" />
                  </IconButton>
                  <IconButton borderWidth={"1px"} rounded={"10px"} borderColor={"#CDD6E933"} bg={"grayBg"}>
                    <Calendar size="32" color="#292D32" />
                  </IconButton>
                  <Button bg={"secondary"} rounded={"10px"}><ExportCurve size="32" color="#FFFFFF" />Export xlsx</Button>

                  <CreateTodo />
                </Flex>

              </Flex>
              <Box p={"5"}>
                <Flex justifyContent={"space-between"} alignItems={"center"} bg={"#E9F5F7"} p={"2"} rounded={"6px"} mb={"4"}>
                  <Box borderRadius="10px" overflow="hidden">
                    <InputGroup startAddon={<SearchNormal1 size={14} color="#6C7278" />}>
                      <Input type="text" maxW={"300px"} bg={"#fff"} rounded={"10px"} border={"none"} placeholder="Search for To-Do" />

                    </InputGroup>
                  </Box>


                  <ButtonGroup bg={"#fff"} py={"2"} px={"3"} rounded={"10px"}>
                    <IconButton bg="grayBg" p={"2"} rounded={"10px"}><RowHorizontal size="32" color="#7988A9" /></IconButton>
                    <IconButton bg="primary" p={"2"} rounded={"10px"}><RowVertical size="32" color="#FFFFFF" /></IconButton>
                  </ButtonGroup>
                </Flex>

                <Flex alignItems={"center"} bg={"#F7F7F7"} p={"2"} gap="3" rounded={"6px"}>
                  <Button bg={"white"} w={"180px"} px={"1"}>
                    <Flex justifyContent={"space-between"} w={"full"} >
                      <Flex alignItems={"center"} gap={"3"}>
                        <TaskSquare size="20px"
                          color="#CFB7E8" variant="Bold" />
                        <Text fontSize={"14px"} color={"#464B50"}>To Do</Text>
                      </Flex>

                      <Span bg={"#F9F3FF"} p={"1"} color={"#464B50"} rounded={"6px"} fontSize={"sm"}>(20)</Span>
                    </Flex>

                  </Button>
                  <Button bg={"white"} w={"180px"} px={"1"}>
                    <Flex justifyContent={"space-between"} w={"full"} >
                      <Flex alignItems={"center"} gap={"3"}>
                        <Status size="20px"
                          color="#F6BE38" variant="Bold" />
                        <Text fontSize={"14px"} color={"#464B50"}>In Progress</Text>
                      </Flex>

                      <Span bg={"#FBF4E4"} p={"1"} color={"#464B50"} rounded={"6px"} fontSize={"sm"}>(20)</Span>
                    </Flex>

                  </Button>
                  <Button bg={"white"} w={"180px"} px={"1"}>
                    <Flex justifyContent={"space-between"} w={"full"} >
                      <Flex alignItems={"center"} gap={"3"}>
                        <TickCircle size="20px"
                          color="#75C5C1" variant="Bold" />
                        <Text fontSize={"14px"} color={"#464B50"}>Completed</Text>
                      </Flex>

                      <Span bg={"#E9F5F7"} p={"1"} color={"#464B50"} rounded={"6px"} fontSize={"sm"}>(20)</Span>
                    </Flex>

                  </Button>
                </Flex>
              </Box>
            </Box>

          </Box>

        </Stack>

      </Flex>
    </Box>
  );
}

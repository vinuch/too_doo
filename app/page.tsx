import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar";
import { Box, Button, ButtonGroup, Flex, IconButton, Input, InputGroup, Stack, Text } from "@chakra-ui/react";
import { AddCircle, ArrowCircleLeft2, Calendar, ExportCurve, RowHorizontal, RowVertical, SearchNormal1, Sort } from "iconsax-reactjs";
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
                  <Button bg={"primary"} rounded={"10px"}><AddCircle size="32" color="#FFFFFF" />Add Task</Button>
                </Flex>

              </Flex>
              <Box p={"5"}>
                <Flex justifyContent={"space-between"} alignItems={"center"} bg={"#E9F5F7"} p={"2"} rounded={"6px"}>
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
              </Box>
            </Box>

          </Box>

        </Stack>

      </Flex>
    </Box>
  );
}

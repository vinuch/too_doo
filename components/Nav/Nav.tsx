import { Avatar, Box, Button, Flex, IconButton, Image, Input, InputGroup, Text } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { RxLink1 } from "react-icons/rx";
import { ArrowDown2, ArrowDown3, CloseCircle, Notification, SearchNormal1 } from 'iconsax-reactjs';

export default function Nav() {
    return (
        <Flex
            bg="white"
            px="6"
            py="4"
            borderBottomWidth={"1px"}
            borderColor={"borders.subtle"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"4"}
            mb={"4"}>

            <Flex gap="30px">

                <Box borderRadius="10px" overflow="hidden" borderColor={"borders.subtle"} borderWidth={"1px"} >

                    <InputGroup startAddon={<SearchNormal1 size={16} color="#6C7278" />} endAddon={<CloseCircle size={16} color="#6C7278" />} rounded={"20px"}>
                        <Input type="text" bg={"grayBg"} border={"0"} />

                    </InputGroup>
                </Box>



                <Flex gap={"3"} alignItems={"center"}>
                    <IconButton
                        bg="white"
                        color="black"
                        borderWidth="1px"
                        borderColor={"borders.subtle"}
                        rounded={"10px"}>
                        <Image src="/1.png" alt="search icon" boxSize="20px" objectFit={"contain"} />
                    </IconButton>
                    <IconButton
                        bg="white"
                        color="black"
                        borderWidth="1px"
                        borderColor={"borders.subtle"}
                        rounded={"10px"}>
                        <Image src="/2.png" alt="search icon" boxSize="20px" objectFit={"contain"} />

                    </IconButton>
                    <IconButton
                        bg="white"
                        color="black"
                        borderWidth="1px"
                        borderColor={"borders.subtle"}
                        rounded={"10px"}>
                        <Image src="/3.png" alt="search icon" boxSize="20px" objectFit={"contain"} />

                    </IconButton>
                    <IconButton
                        bg="white"
                        color="black"
                        borderWidth="1px"
                        borderColor={"borders.subtle"}
                        rounded={"10px"}>
                        <Image src="/4.png" alt="search icon" boxSize="20px" objectFit={"contain"} />

                    </IconButton>
                </Flex>
            </Flex>


            <Flex alignItems={"center"} gap="4">

                <Flex bg="grey.100" p="2" rounded="10px" gap="10px" borderWidth={"1px"} borderColor="borders.light" alignItems={"center"}>
                    <Button bg="secondary" rounded="10px">
                        Melding maken
                    </Button>
                    <Button bg="primary" rounded="10px">
                        VIM
                    </Button>
                    <Button bg="primary" rounded="10px">
                        LMS
                    </Button>
                    <Button bg="primary" rounded="10px">
                        BHV
                    </Button>
                    <Button bg="primary" rounded="10px">
                        DataLek
                    </Button>
                </Flex>

                <IconButton
                    bg="grayBg"
                    color="black"
                    borderWidth="1px"
                    borderColor={"borders.light"}
                    height={"55px"}
                    px={"3"}
                    rounded={"10px"}>
                    <RxLink1
                        size="40"
                        color="#464B50"
                    />
                </IconButton>
            </Flex>

            <Flex gap="15px" alignItems={"center"}>
                <IconButton
                    bg="grayBg"
                    color="black"
                    borderWidth="1px"
                    borderColor={"borders.light"}
                    rounded={"full"} size={"lg"}>
                    <Notification

                        color="#464B50"
                    />
                </IconButton>

                <Flex alignItems={"center"} gap="25px" bg="grayBg" rounded="full" px="2" py="1">
                    <Avatar.Root size={"xl"}>
                        <Avatar.Fallback name="Segun Adebayo" />
                        <Avatar.Image src="https://bit.ly/sage-adebayo" />
                    </Avatar.Root>

                    <Text>Hi Paul</Text>

                    <IconButton bg="grayBg" rounded={"full"} size={"lg"}>
                        <ArrowDown2 color="#6C7278" fill="#6C7278" variant="Bold" />

                    </IconButton>

                </Flex>
            </Flex>

        </Flex>
    );
}


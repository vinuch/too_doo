import { Avatar, Flex, IconButton, Text } from "@chakra-ui/react";
import { ArrowDown2 } from "iconsax-reactjs";

export const UserHeader = () => (
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
)
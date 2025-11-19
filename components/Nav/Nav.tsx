import { Avatar, Box, Button, Flex, IconButton, Image, Input, InputGroup, Text } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { RxLink1 } from "react-icons/rx";
import { ArrowDown2, ArrowDown3, CloseCircle, Notification, SearchNormal1 } from 'iconsax-reactjs';
import { UserHeader } from "./UserHeader";
import { QuickActions } from "./QuickActions";
import { SearchBar } from "./SearchBar";

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

            w={"full"}>

            <SearchBar />


            <QuickActions />

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

                <UserHeader />
            </Flex>

        </Flex>
    );
}


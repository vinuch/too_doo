import { Button, Flex, IconButton } from "@chakra-ui/react";
import { RxLink1 } from "react-icons/rx";

export const QuickActions = () => (
    <Flex alignItems={"center"} gap="4" display={{ base: "none", md: "flex" }} >

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
)
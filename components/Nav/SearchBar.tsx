import { Box, Flex, IconButton, Image, Input, InputGroup } from "@chakra-ui/react";
import { CloseCircle, SearchNormal1 } from "iconsax-reactjs";
import { IconImageButton } from "./IconImageBtn";

export const SearchBar = () => (
    <Flex gap="30px">

        <Box borderRadius="10px" overflow="hidden" borderColor={"borders.subtle"} borderWidth={"2px"} >

            <InputGroup startAddon={<SearchNormal1 size={16} color="#6C7278" />} endAddon={<CloseCircle size={16} color="#6C7278" />} rounded={"20px"}>
                <Input type="text" bg={"grayBg"} border={"0"} />

            </InputGroup>
        </Box>

        <Flex gap={"3"} alignItems={"center"}>
            <IconImageButton src="/1.png" />
            <IconImageButton src="/2.png" />
            <IconImageButton src="/3.png" />
            <IconImageButton src="/4.png" />

        </Flex>
    </Flex>
)
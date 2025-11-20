'use client'

import { Box, IconButton, Collapsible, Stack, Button, Text, VStack, Image } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight, Call, Category, Edit, Folder2, MenuBoard, MessageEdit, Note, NotificationBing, People, Stickynote, TaskSquare } from "iconsax-reactjs";
import { useState } from "react";
import { LuChevronDown, LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box
            position="relative"
            width={isOpen ? "250px" : "60px"}
            height="100vh"
            bg="white"
            borderRight="1px"
            // overflow="hidden"
            transition="all"
            borderRightWidth={"1px"}
            borderColor={"borders.subtle"}
        >

            <IconButton
                bg={"#F7F7F7"}
                onClick={() => setIsOpen(!isOpen)}
                position="absolute"
                top="4"
                right="-5"
                transform="translateX(-50%)"
                size="sm"
                variant="ghost"
                aria-label="Toggle sidebar"
                zIndex="10"
            >
                {isOpen ? <ArrowLeft size="32" /> : <ArrowRight size="32" />}
            </IconButton>

            {isOpen ? <Image src={"/logo.png"} w="150px" /> : ''}


            <VStack
                padding="4"
                paddingTop="16"
                align="stretch"
                gap="4"
                display={isOpen ? 'block' : 'none'}
            >
                <Stack gap="2">
                    <Button variant="ghost" justifyContent="flex-start">
                        <Category size="32" color="#7988A9" /> Home
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        <Stickynote size="32" color="#7988A9" /> MKVanBinnen
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        <Folder2 size="32" color="#7988A9" /> Document Management
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        <People size="32" color="#7988A9" /> Patient Information
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        <Note size="32" color="#7988A9" /> Agenda
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        <Note size="32" color="#7988A9" /> My Department
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        <Call size="32" color="#7988A9" /> Phone numbers
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        <TaskSquare size="32" color="#7988A9" /> My to do Protocols
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        <NotificationBing size="32" color="#7988A9" /> My Notifications
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        <MenuBoard size="32" color="#7988A9" /> Knowledge Base
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        <MessageEdit size="32" color="#7988A9" /> Super Admin
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        <Edit size="32" color="#7988A9" /> Admin
                    </Button>
                </Stack>
            </VStack>

            {!isOpen && (
                <VStack
                    paddingTop="24"
                    gap="3">
                    <IconButton size="sm" variant="ghost" ><Category size="32" color="#7988A9" /></IconButton>
                    <IconButton size="sm" variant="ghost" ><Stickynote size="32" color="#7988A9" /></IconButton>
                    <IconButton size="sm" variant="ghost" ><Folder2 size="32" color="#7988A9" /></IconButton>
                    <IconButton size="sm" variant="ghost" ><People size="32" color="#7988A9" /></IconButton>
                    <IconButton size="sm" variant="ghost" ><Note size="32" color="#7988A9" /></IconButton>
                    <IconButton size="sm" variant="ghost" ><Call size="32" color="#7988A9" /></IconButton>
                    <IconButton size="sm" variant="ghost" ><TaskSquare size="32" color="#7988A9" /></IconButton>
                    <IconButton size="sm" variant="ghost" ><NotificationBing size="32" color="#7988A9" /></IconButton>
                    <IconButton size="sm" variant="ghost" ><MenuBoard size="32" color="#7988A9" /></IconButton>
                    <IconButton size="sm" variant="ghost" ><MessageEdit size="32" color="#7988A9" /></IconButton>
                    <IconButton size="sm" variant="ghost" ><Edit size="32" color="#7988A9" /></IconButton>



                </VStack>
            )}
        </Box>
    );
}
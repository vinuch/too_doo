'use client'

import { Box, IconButton, Collapsible, Stack, Button, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { LuChevronDown, LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box
            position="relative"
            width={isOpen ? "200px" : "60px"}
            height="100vh"
            bg="gray.50"
            borderRight="1px"
            borderColor="gray.200"
            overflow="hidden"
            transition="all"
        >

            <IconButton

                onClick={() => setIsOpen(!isOpen)}
                position="absolute"
                top="4"
                left="50%"
                transform="translateX(-50%)"
                size="sm"
                variant="ghost"
                aria-label="Toggle sidebar"
                zIndex="10"
            >
                {isOpen ? <LuChevronLeft /> : <LuChevronRight />}
            </IconButton>


            <VStack
                padding="4"
                paddingTop="16"
                align="stretch"
                gap="4"
                display={isOpen ? 'block' : 'none'}
            >
                <Text fontWeight="bold">Menu</Text>
                <Stack gap="2">
                    <Button variant="ghost" justifyContent="flex-start">
                        Dashboard
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        Projects
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        Settings
                    </Button>
                    <Button variant="ghost" justifyContent="flex-start">
                        Profile
                    </Button>
                </Stack>
            </VStack>

            {!isOpen && (
                <VStack
                    paddingTop="24"
                    gap="3">
                    <IconButton size="sm" variant="ghost" ><Text>📊</Text></IconButton>
                    <IconButton size="sm" variant="ghost" ><Text>📁</Text></IconButton>
                    <IconButton size="sm" variant="ghost" ><Text>⚙️</Text></IconButton>
                    <IconButton size="sm" variant="ghost" ><Text>👤</Text></IconButton>



                </VStack>
            )}
        </Box>
    );
}
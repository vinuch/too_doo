import { Avatar, Flex, Span } from "@chakra-ui/react";
import { Todo } from "../CreateTodoDialog";

type AvatarGroupProps = {
    item: Todo
}

export function AvatarGroup({ item }: AvatarGroupProps) {
    return (
        <Flex align="center">
            {item.assigned_to.length < 1 ? "Select Assignee" : ''}
            {item.assigned_to.slice(0, 2).map((person, i) => (
                <Avatar.Root
                    key={person.id}
                    size="2xs"
                    borderWidth="3px"
                    borderColor="white"
                    ml={i === 0 ? 0 : "-5px"}
                >
                    <Avatar.Fallback name={person.name} />
                    <Avatar.Image src={person.img} />
                </Avatar.Root>
            ))}

            {item.assigned_to.length > 2 && (
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
                    +{item.assigned_to.length - 2}
                </Span>
            )}
        </Flex>
    )
}
import { IconButton, Image } from "@chakra-ui/react";

export const IconImageButton = ({ src }: { src: string }) => {
    return (
        <IconButton aria-label="icon" bg="white"
            color="black"
            borderWidth="1px"
            borderColor={"borders.subtle"}
            rounded={"10px"}>
            <Image src={src} alt="" boxSize="20px" objectFit="contain" />
        </IconButton>
    );
};

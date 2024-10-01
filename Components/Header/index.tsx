import Logos from "@/Constants/Logos";
import { Box, Group, Flex, Image, Text } from "@mantine/core";

export default function Header() {
  return (
    <>
      <Box px="5rem" py="sm" w="100%">
        <Group justify="space-between" align="center">
          <Image src={Logos.appLogo} w="auto" h="4rem"></Image>
          <Flex gap="7rem">
            <Text fz="h4" fw={600}>Home</Text>
            <Text fz="h4" fw={600}>Product</Text>
            <Text fz="h4" fw={600}>Faq</Text>
            <Text fz="h4" fw={600}>Contact</Text>
          </Flex>
        </Group>
      </Box>
    </>
  );
}

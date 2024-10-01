import backgroundImage from "@/Constants/Background";
import {
  BackgroundImage,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Image,
  Divider,
  px,
} from "@mantine/core";
import Images from "@/Constants/Images";
import clasess from "/app/page.module.css";
export default function Dashboard() {
  const dashboardContent = () => (
    <>
      <Stack align="center" pt="3rem" gap="xl">
        <Text
          c={{ sm: "white", base: "#737373" }}
          fz={{ sm: "h2", base: 16 }}
          fw="bold"
        >
          Food app
        </Text>
        <Text
          c={{ sm: "white", base: "#252B42" }}
          ta="center"
          w={{ sm: "60%" }}
          fz={{ sm: "58", base: "36" }}
          fw="bold"
          style={{ lineHeight: 1.2 }}
        >
          Why stay hungry when you can order form Bella Olonje
        </Text>
        <Text
          c={{ sm: "white", base: "#737373" }}
          fz={{ sm: "h3", base: 24 }}
          ta="center"
        >
          Download the bella onoje’s food app now on
        </Text>
        <Flex gap="3rem" visibleFrom="sm">
          <Button className={clasess.dashPlayBtn}>Playstore</Button>
          <Button className={clasess.dashAppBtn}>App store</Button>
        </Flex>
        <Stack hiddenFrom="sm">
          <Button
            radius="2rem"
            fz={22}
            fw="bold"
            px="4rem"
            py="1rem"
            c="white"
            w="auto"
            bg="#fa4a0c"
            h="auto"
          >
            Playstore
          </Button>
          <Button
            radius="2rem"
            fz={22}
            fw="bold"
            px="4rem"
            py="1rem"
            c="#fa4a0c"
            w="auto"
            bg="transparent"
            h="auto"
            style={{ border: "1px solid #fa4a0c" }}
          >
            App store
          </Button>
        </Stack>
      </Stack>
    </>
  );

  return (
    <>
      <Box w="100%" h="auto">
        <BackgroundImage
          visibleFrom="sm"
          src={backgroundImage.dashboardBackground}
          w="100%"
          h="100vh"
        >
          {dashboardContent()}
        </BackgroundImage>
        <Box hiddenFrom="sm">{dashboardContent()}</Box>
        <Stack align="center" gap="4rem" px={{ sm: "10rem" }}>
          <Image
            visibleFrom="sm"
            mt="-12rem"
            src={Images.twoMobile}
            w="35rem"
            h="auto"
            style={{ filter: "drop-shadow(1px 1px 5px #545151)" }}
          />
          <Image
            hiddenFrom="sm"
            src={Images.twoMobiles2}
            mt="2rem"
            w="20rem"
            h="auto"
            style={{ filter: "drop-shadow(1px 1px 5px #545151)" }}
          />
          <Divider visibleFrom="sm" size="md" w="100%" mt="4rem" />
          <Text fz={{ sm: 44, base: 24 }} fw="bold">
            How the app works
          </Text>
          <Divider mt="2rem" hiddenFrom="sm" size="md" w="100%"></Divider>
        </Stack>
      </Box>
    </>
  );
}

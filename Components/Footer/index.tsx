import backgroundImage from "@/Constants/Background";
import Icons from "@/Constants/Icons";
import Logos from "@/Constants/Logos";
import {
  BackgroundImage,
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Text,
  Image,
} from "@mantine/core";
import clasess from "/app/page.module.css";
import { useMediaQuery } from "@mantine/hooks";
export default function Footer() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Box pt="10rem">
        <BackgroundImage
          bg={isMobile ? "#252B42" : ""}
          src={backgroundImage.footerBackground}
        >
          <Stack align="center" py="7rem" gap="xs">
            <Text c="white" fz={40} fw="bold" ta="center">
              {isMobile ? (
                <>
                  Download the
                  <br /> app now.
                </>
              ) : (
                <>Download the app now.</>
              )}
            </Text>
            <Text
              c={{ sm: "white", base: "#BDBDBD" }}
              fz={24}
              fw="normal"
              ta="center"
            >
              {isMobile ? (
                <>
                  Most calendars are <br />
                  designed for teams.
                </>
              ) : (
                <>
                  Available on your favorite store. Start your premium
                  experience now
                </>
              )}
            </Text>
            <Flex gap={isMobile ? "1rem" : "3rem"} pt="xl">
              <Button className={clasess.footBuyBtn}>Buy Now</Button>
              <Button className={clasess.footTryBtn}>Try for free</Button>
            </Flex>
          </Stack>
        </BackgroundImage>
        <Box
          px={{ sm: "10rem", base: "5rem" }}
          py={{ sm: "1rem", base: "3rem" }}
        >
          <Group align="center" justify="space-between">
            <Image visibleFrom="sm" src={Logos.appLogo}></Image>
            <Flex gap="2rem">
              <Image src={Icons.TwitterIcon} className={clasess.icons}></Image>
              <Image src={Icons.FacebookIcon} className={clasess.icons}></Image>
              <Image
                src={Icons.InstagramIcon}
                className={clasess.icons}
              ></Image>
            </Flex>
            <Text fz={12} fw="bold" c="#5C5C5C">
              Copywright 2020 Bella Onojie.com
            </Text>
          </Group>
        </Box>
      </Box>
    </>
  );
}

"use client";
import Images from "@/Constants/Images";
import { Box, Grid, Stack, Text, Image } from "@mantine/core";
import clasess from "/app/page.module.css";
import { useMediaQuery } from "@mantine/hooks";
export default function AboutLogin() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box pt={{ sm: "7rem" }}>
        <Grid
          align="center"
          gutter={0}
          pl={{ sm: "10rem" }}
          pr={{ sm: "5rem" }}
        >
          <Grid.Col visibleFrom="sm" span={6}>
            <Image src={Images.loginPhone} className={clasess.Phone}></Image>
          </Grid.Col>
          <Grid.Col span={{ sm: 6, base: 12 }}>
            <Stack
              gap={isMobile ? "xl" : ""}
              justify="center"
              h="100vh"
              align={isMobile ? "center" : "start"}
            >
              <Text c="#FA4A0C" fw="bold" fz={{ sm: "h3", base: 24 }}>
                Create an account
              </Text>
              <Text
                px={{ sm: "0", base: "lg" }}
                ta={{ sm: "start", base: "center" }}
                fw="bold"
                fz={{ sm: "2.5rem", base: 40 }}
                style={{ lineHeight: 1.2 }}
              >
                {isMobile ? (
                  <>
                    Create/login to an existing <br />
                    account to get started
                  </>
                ) : (
                  <>Create/login to an existing account to get started</>
                )}
              </Text>
              <Text
                px={{ sm: "0", base: "lg" }}
                ta={{ sm: "start", base: "center" }}
                c="#737373"
                fz={{ sm: "h3", base: 24 }}
                fw="normal"
              >
                {isMobile ? (
                  <>
                    An account is
                    <br /> created with your
                    <br /> email and a desired <br />
                    password
                  </>
                ) : (
                  <>
                    An account is created with your email
                    <br /> and a desired password
                  </>
                )}
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col hiddenFrom="sm" span={12}>
            <Image
              src={Images.loginPhone2}
              style={{ filter: "drop-shadow(1px 1px 5px #545151)" }}
            ></Image>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

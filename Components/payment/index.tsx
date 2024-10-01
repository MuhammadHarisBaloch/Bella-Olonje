"use client";
import Images from "@/Constants/Images";
import { Box, Grid, Stack, Text, Image } from "@mantine/core";
import clasess from "/app/page.module.css";
import { useMediaQuery } from "@mantine/hooks";

export default function Payment() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Box pt={{ sm: "7rem", base: 0 }}>
        <Grid
          align="center"
          gutter={0}
          pl={{ sm: "10rem", base: "md" }}
          pr={{ sm: "5rem", base: "md" }}
        >
          <Grid.Col span={6} visibleFrom="sm">
            <Image src={Images.paymentPhone} className={clasess.Phone}></Image>
          </Grid.Col>
          <Grid.Col span={{ sm: 6, base: 12 }}>
            <Stack
              gap={isMobile ? "xl" : 0}
              justify="center"
              align={isMobile ? "center" : "start"}
              h="80vh"
            >
              <Text
                c="#FA4A0C"
                fw="bold"
                fz={{ sm: "h3", base: 24 }}
                ta={{ sm: "start", base: "center" }}
              >
                Checkout
              </Text>
              <Text
                fw="bold"
                fz={{ sm: "2.5rem", base: 40 }}
                ta={{ sm: "start", base: "center" }}
                style={{ lineHeight: 1.2 }}
              >
                {isMobile ? (
                  <>
                    When you <br />
                    done check
                    <br /> out and get it
                    <br /> delivered.
                  </>
                ) : (
                  <>
                    When you done check out <br />
                    and get it delivered.
                  </>
                )}
              </Text>
              <Text
                c="#737373"
                fz={{ sm: "h3", base: 24 }}
                fw="normal"
                ta={{ sm: "start", base: "center" }}
              >
                {isMobile ? (
                  <>
                    When you done
                    <br /> check out and get it <br />
                    delivered with ease.
                  </>
                ) : (
                  <>
                    When you done check out and get it <br />
                    delivered with ease.
                  </>
                )}
              </Text>
            </Stack>
            <Grid.Col span={{ sm: 6, base: 12 }} hiddenFrom="sm">
              <Image
                mx="4rem"
                src={Images.paymentPhone}
                className={clasess.Phone}
              ></Image>
            </Grid.Col>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

"use client";
import Images from "@/Constants/Images";
import { Box, Grid, Stack, Text, Image } from "@mantine/core";
import clasess from "/app/page.module.css";
import { useMediaQuery } from "@mantine/hooks";
export default function AboutMenu() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <Box pt="7rem">
        <Grid
          align="center"
          gutter={0}
          pl={{ sm: "10rem", base: "0" }}
          pr={{ sm: "5rem", base: "0" }}
        >
          <Grid.Col span={{ sm: 6, base: 12 }}>
            <Stack
              gap={isMobile ? "xl" : 0}
              px={{ sm: 0, base: "md" }}
              justify="center"
              align={isMobile ? "center" : "start"}
              h="80vh"
            >
              <Text c="#FA4A0C" fw="bold" fz={{ sm: "h3", base: 24 }}>
                Explore varieties
              </Text>
              <Text
                ta={{ sm: "start", base: "center" }}
                fw="bold"
                fz={{ sm: "2.5rem", base: 40 }}
                style={{ lineHeight: 1.2 }}
              >
                {isMobile ? (
                  <>
                    Shop for your <br />
                    favorites meal
                    <br /> as e dey hot.
                  </>
                ) : (
                  <>
                    Shop for your favorites <br />
                    meal as e dey hot.
                  </>
                )}
              </Text>
              <Text
                c="#737373"
                fz={{ sm: "h3", base: 26 }}
                ta={{ sm: "start", base: "center" }}
                fw="normal"
              >
                {isMobile ? (
                  <>
                    Shop for your <br />
                    favorite meals or
                    <br /> drinks and enjoy <br />
                    while doing it.
                  </>
                ) : (
                  <>
                    Shop for your favorite meals or drinks <br />
                    and enjoy while doing it.
                  </>
                )}
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ sm: 6, base: 12 }} pl={{ sm: "8rem", base: 0 }}>
            <Image
              mx={{ sm: 0, base: "5rem" }}
              src={Images.menuPhone}
              className={clasess.Phone}
            ></Image>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

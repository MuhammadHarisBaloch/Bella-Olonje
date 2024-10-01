"use client";
import Logos from "@/Constants/Logos";
import {
  AppShell,
  Group,
  Burger,
  UnstyledButton,
  Image,
  Button,
  Stack,
  Center,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PropsWithChildren } from "react";
import clasess from "/app/page.module.css";

export default function WebsiteLayout({ children }: PropsWithChildren) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <AppShell
        header={{ height: 80 }}
        navbar={{
          width: 2000,
          breakpoint: "sm",
          collapsed: { desktop: true, mobile: !opened },
        }}
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Group hiddenFrom="sm" px="md" justify="space-between" w="100%">
              <Burger
                opened={opened}
                onClick={toggle}
                size="sm"
                color="#737373"
                lineSize={3}
              />
              <Center>
                <Image w="auto" h="4rem" src={Logos.appLogo}></Image>
              </Center>
            </Group>
            <Group
              px="4rem"
              justify="space-between"
              w="100%"
              visibleFrom="sm"
              align="center"
            >
              <Image w="auto" h="4rem" src={Logos.appLogo}></Image>
              <Group gap="7rem">
                <UnstyledButton className={clasess.headerbtn}>
                  Home
                </UnstyledButton>
                <UnstyledButton className={clasess.headerbtn}>
                  Product
                </UnstyledButton>
                <UnstyledButton className={clasess.headerbtn}>
                  Faq
                </UnstyledButton>
                <UnstyledButton className={clasess.headerbtn}>
                  Contact
                </UnstyledButton>
              </Group>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar pb={24} pt={64} px={32} w={{ base: "70%" }}>
          <Stack justify="space-between" h="100vh">
            <Stack gap={24}>
              <UnstyledButton className={clasess.headerbtn}>
                Home
              </UnstyledButton>
              <UnstyledButton className={clasess.headerbtn}>
                Product
              </UnstyledButton>
              <UnstyledButton className={clasess.headerbtn}>Faq</UnstyledButton>
              <UnstyledButton className={clasess.headerbtn}>
                Contact
              </UnstyledButton>
            </Stack>
          </Stack>
        </AppShell.Navbar>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
}

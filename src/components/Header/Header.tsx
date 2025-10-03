import {
    Box,
    Burger,
    Button,
    Collapse,
    Divider,
    Drawer,
    Flex,
    Group,
    ScrollArea,
    Text,
    ThemeIcon,
    Title,
    UnstyledButton,
    useMantineTheme
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBook, IconChartPie3, IconCode, IconCoin, IconFingerprint, IconNotification } from "@tabler/icons-react";

import { useScrollToTop } from "@/hooks/useScrollToTop";
import { isLinkActiveCheck } from "@/utils/isLinkActiveCheck";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "../../../local.fonts/PressStart.css";
import { FullScreenModal } from "../FullScreenModal/FullScreenModal";
import classes from "./Header.module.css";

const mockdata = [
    {
        icon: IconCode,
        title: "Open source",
        description: "This Pokémon’s cry is very loud and distracting",
    },
    {
        icon: IconCoin,
        title: "Free for everyone",
        description: "The fluid of Smeargle’s tail secretions changes",
    },
    {
        icon: IconBook,
        title: "Documentation",
        description: "Yanma is capable of seeing 360 degrees without",
    },
    {
        icon: IconFingerprint,
        title: "Security",
        description: "The shell’s rounded shape and the grooves on its.",
    },
    {
        icon: IconChartPie3,
        title: "Analytics",
        description: "This Pokémon uses its flying ability to quickly chase",
    },
    {
        icon: IconNotification,
        title: "Notifications",
        description: "Combusken battles with the intensely hot flames it spews",
    },
];

export function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [opened, { open, close }] = useDisclosure(false);
    const [active, setActive] = useState("");

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const { pathname } = useLocation();
    useScrollToTop();

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={22} color={theme.colors.blue[6]} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500} c="white">
                        {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setActive(pathname);
    }, []);

    return (
        <Box className={classes.wrapper}>
            {opened && <FullScreenModal opened={opened} close={close} />}
            <header className={scrollPosition === 0 ? classes.header_top : classes.header_scrolled}>
                <Group justify="space-between" h="100%">
                    <Flex justify="center" align="center" gap={5} visibleFrom="sm" direction="column">
                        <Text size="24px" fw={700} c="white">
                            Топ вывески
                        </Text>
                    </Flex>

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <Link
                            to={{
                                pathname: "/",
                            }}
                            className={isLinkActiveCheck("/", active) ? classes.link_top_active : classes.link_top}
                            onClick={() => setActive(pathname)}
                        >
                            Главная
                        </Link>

                        <Link
                            to={{
                                pathname: "/contact",
                            }}
                            className={
                                isLinkActiveCheck("/contact", active) ? classes.link_top_active : classes.link_top
                            }
                            onClick={() => setActive(pathname)}
                        >
                            Контакты
                        </Link>
                    </Group>

                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        hiddenFrom="sm"
                        color="white"
                        lineSize={4}
                        size="md"
                        aria-label="Toggle navigation"
                    />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                position="right"
                title={
                    <Flex direction="column" justify="center" align="center">
                        <Title order={1} size="md" style={{ fontFamily: "PressStart" }}>
                            Топ вывески
                        </Title>
                    </Flex>
                }
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px" mx="-md">
                    <Divider mb={20} />

                    <Flex direction="column" justify="center" align="center">
                        <NavLink
                            to={{
                                pathname: "/",
                            }}
                            className={isLinkActiveCheck("/", active) ? classes.link_mobile_active : classes.link_mobile}
                            onClick={() => {
                                closeDrawer();
                                setActive(pathname);
                            }}
                        >
                            Главная
                        </NavLink>

                        <Collapse in={linksOpened}>{links}</Collapse>
                        <NavLink
                            to={{
                                pathname: "/contact",
                            }}
                            className={isLinkActiveCheck("/contact", active) ? classes.link_mobile_active : classes.link_mobile}
                            onClick={() => {
                                closeDrawer();
                                setActive(pathname);
                            }}
                        >
                            Контакты
                        </NavLink>
                    </Flex>

                    <Divider mt={20} mb={40} />
                    <Group justify="center" grow pb="xl" px="md">
                        <Button
                            variant="default"
                            onClick={() => {
                                open();
                                closeDrawer();
                            }}
                        >
                            Обратный звонок
                        </Button>

                        <Button
                            size="sm"
                            component="a"
                            href="tel:+79280777722"
                            color="#FED8B1"
                            c={theme.colors.dark[6]}
                        >
                            Позвонить
                        </Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}

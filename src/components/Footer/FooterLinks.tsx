import { IconBrandInstagram, IconBrandTelegram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text, Title, Image, Flex } from "@mantine/core";
import classes from "./FooterLinks.module.css";

const data = [
    {
        title: "Страницы",
        links: [
            { label: "Главная", link: "/" },
            { label: "Контакты", link: "/contact" },
            // { label: "Support", link: "#" },
            // { label: "Forums", link: "#" },
        ],
    },
    {
        title: "Портфолио",
        links: [
            { label: "Проекты-1", link: "#" },
            { label: "Проекты-2", link: "#" },
            { label: "Проекты-3", link: "#" },
            { label: "Проекты-4", link: "#" },
        ],
    },
    {
        title: "Контакты",
        links: [
            { label: "Тел", link: "+79280777722" },
            { label: "w-app", link: "+79280777722" },
            { label: "telegram", link: "+79280777722" },
            { label: "Email:", link: "#" },
        ],
    },
];

export function FooterLinks() {
    const groups = data.map((group, i) => {
        const links = group.links.map((link, index) => (
            <Text<"a">
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                // onClick={(event) => event.preventDefault()}
            >
                {i !== 2 ? link.label : `${link.label} : ${link.link}`}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Flex direction="column" align="start">
                        <Title order={1} size="lg" style={{ fontFamily: "PressStart" }}>
                            Топ вывески
                        </Title>
                     
                    </Flex>
          
                    <Text size="xs" c="dimmed" className={classes.description}>
                        Яркие идеи. Видимые результаты.
                    </Text>
                    <Text pt={10} size="xs" c="dimmed" className={classes.description}>
                        Мы производим качественные вывески, лайтбоксы и рекламную продукцию, используя современные
                        технологии и материалы.
                    </Text>
                </div>
            </Container>
            <Container className={classes.afterFooter}>
                <Flex justify="center" align="center">
                    <Text c="dimmed" size="12px" mr="xs">
                        © 2025.
                    </Text>
                    <Text c="dimmed" size="10px" style={{ fontFamily: "PressStart" }} mr="xs">
                        Топ вывески.
                    </Text>
                    <Text c="dimmed" size="12px">
                        Все права защищены.
                    </Text>
                </Flex>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTelegram size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}

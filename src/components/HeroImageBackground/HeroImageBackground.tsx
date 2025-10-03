import { Badge, Button, Container, Flex, Text, Title, useMantineTheme } from "@mantine/core";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "animate.css";
import { useNavigate } from "react-router-dom";
import "../../../local.fonts/PressStart.css";
import classes from "./HeroImageBackground.module.css";
type AlignmentType = {
    alignment: "center" | "end" | "start" | undefined;
};

type HeroImageBackgroundType = {
    page: "home" | "contacts";
    scrollIntoView: (value: AlignmentType) => void;
};

export const HeroImageBackground: React.FC<HeroImageBackgroundType> = ({ page, scrollIntoView }) => {
    const theme = useMantineTheme();
    const navigate = useNavigate();

    return page === "home" ? (
        <Flex className={classes.wrapper_home} direction="column" bg="blue.6" pt={150} pb={150}>
   
            <Title
                className="animate__animated animate__backInDown"
                ta="center"
                size="32px"
                fw={700}
                c="white"
                style={{ fontFamily: "PressStart" }}
            >
                Топ Вывески
            </Title>

            <Container size={640} ta="center">
                <Text className={classes.description} ta="center" size="24px" fw={700} c="white">
                    Наружная реклама г.Нальчик
                </Text>
            </Container>

            <div className="animate__animated animate__wobble">
                <DotLottieReact
                    className={classes.lottie}
                    src="/images/hero/animation.lottie"
                    loop
                    autoplay
                    style={{
                        height: "auto",
                        width: "1000px",
                    }}
                />
            </div>

            <div className="animate__animated animate__bounce">
                <Container size="80%" pt={20}>
                    <div className="animate__animated animate__bounce">
                        <Flex gap={10} wrap="wrap" justify="center">
                            <Badge color="blue.3 " c="dark.6" size="lg">
                                Рекламные конструкции
                            </Badge>
                            <Badge color="yellow.3" c="dark.6" size="md">
                                Cветовые вывески
                            </Badge>
                            <Badge color="red.3" c="dark.6" size="lg">
                                информационные стенды
                            </Badge>
                            <Badge color="lime.3" c="dark.6" size="md">
                                указатели
                            </Badge>
                            <Badge color="grape.3" c="dark.6" size="lg">
                                брендирование стендов
                            </Badge>
                            <Badge color="gray.3" c="dark.6" size="md">
                                брендирование транспортных средств
                            </Badge>
                            <Badge color="cyan.3" c="dark.6" size="lg">
                                широкоформатная печать
                            </Badge>
                            <Badge color="yellow.3" c="dark.6" size="md">
                                и многое другое...
                            </Badge>
                        </Flex>
                    </div>
                </Container>
            </div>

            <Flex direction={{ base: "column", sm: "row" }} gap={10} pt="xl">
                <Button
                    size="md"
                    onClick={() =>
                        scrollIntoView({
                            alignment: "start",
                        })
                    }
                    radius="xl"
                    p="sm"
                    w="300px"
                    color="yellow.5"
                    variant="gradient"
                    gradient={{ from: "yellow.6", to: "yellow.3", deg: 64 }}
                    c="dark.6"
                >
                    К услугам
                </Button>
                <Button
                    size="md"
                    component="a"
                    href="tel:+79280777722"
                    c={theme.colors.dark[6]}
                    radius="xl"
                    w="300px"
                    p="sm"
                    variant="default"
                >
                    Позвонить
                </Button>
            </Flex>

        </Flex>
    ) : (
        <Flex className={classes.wrapper_contact} direction="column" bg="blue.6" pt={150} pb={150}>
            {/* <Dots className={classes.dots} style={{ right: 0, top: 0 }} /> */}
            {/* <Dots className={classes.dots} style={{ left: 0, bottom: 0 }} /> */}
            {/* <Dots
                className={classes.dots_center}
                style={{ left: "50%", top: "35%", transform: "translate(-50%, -50%)" }}
            /> */}
            {/* <Overlay color="#000" opacity={0.65} zIndex={1} /> */}

            <div className={classes.inner}>
                <Title
                    className="animate__animated animate__backInDown"
                    ta="center"
                    size="32px"
                    fw={700}
                    c="white"
                    style={{ fontFamily: "PressStart" }}
                >
                    Контакты
                </Title>

            <div className="animate__animated animate__wobble">
                <DotLottieReact
                    className={classes.contacts_lottie}
                    src="/images/hero/contacts.lottie"
                    loop
                    autoplay
                    style={{
                        height: "auto",
                        width: "1000px",
                    }}
                />
            </div>

                <Flex direction={{ base: "column", sm: "row" }} gap={10} pt="xl" justify="center" align="center">
                    <Button
                        size="md"
                        onClick={() => navigate("/")}
                        radius="xl"
                        p="sm"
                        w="300px"
                        color="yellow.3"
                        c="dark.6"
                        variant="gradient"
                        gradient={{ from: "yellow.6", to: "yellow.3", deg: 64 }}
                    >
                        На главную
                    </Button>
                    <Button
                        size="md"
                        component="a"
                        href="tel:+79280777722"
                        c={theme.colors.dark[6]}
                        radius="xl"
                        w="300px"
                        p="sm"
                        variant="default"
                    >
                        Позвонить
                    </Button>
                </Flex>
            </div>
        </Flex>
    );
};

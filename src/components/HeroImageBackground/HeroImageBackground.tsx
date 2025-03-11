import cx from "clsx";
import { Button, Container, Overlay, Text, Title, useMantineTheme } from "@mantine/core";
import classes from "./HeroImageBackground.module.css";
import { Dots } from "./Dots";
import "../../../local.fonts/PressStart.css";

type AlignmentType = {
    alignment: "center" | "end" | "start" | undefined;
};

type HeroImageBackgroundType = {
    page: "home" | "contacts";
    scrollIntoView: (value: AlignmentType) => void;
};

export const HeroImageBackground: React.FC<HeroImageBackgroundType> = ({ page, scrollIntoView }) => {
    const theme = useMantineTheme();
    return page === "home" ? (
        <div className={classes.wrapper_home}>
            {/* <Image src="/images/hero/hero-1.jpeg" className={classes.img} /> */}
            {/* <div className={classes.wrapper_contact}> */}
            {/* <Dots className={classes.dots} style={{ right: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, bottom: 0 }} />
            <Dots
                className={classes.dots_center}
                style={{ left: "50%", top: "35%", transform: "translate(-50%, -50%)" }}
            /> */}
            {/* <Overlay
                // color="#202A44"
                color="black"
                opacity={0.5}
                zIndex={1}
            /> */}
            {/* <div className={classes.bg_video}>
                <VideoComponent />
            </div> */}
            <div className={classes.inner}>
                <Title
                    className={classes.title}
                    fw={700}
                    ta="center"
                    style={{ fontFamily: "PressStart" }}
                    // c={theme.colors.dark[6]}
                >
                    Топ Вывески{" "}
                </Title>

                <Container size={640}>
                    <Text
                        className={classes.description}
                        ta="center"
                        size="sm"
                        fw={700}
                        style={{ fontFamily: "PressStart" }}
                        // c={theme.colors.dark[6]}
                    >
                        г.Нальчик
                    </Text>
                </Container>
                {/* <Container size={640}>
                    <Text size="md" className={classes.description}>
                    Рекламные конструкции, световые вывески, информационные стенды, указатели, широкоформатная печать, брендирование стендов и транспортных средств и многое другое...
                    </Text>
                </Container> */}

                <div className={classes.controls}>
                    <Button
                        size="sm"
                        onClick={() =>
                            scrollIntoView({
                                alignment: "center",
                            })
                        }
                        color="#202A44"
                    >
                        К услугам
                    </Button>
                    <Button size="sm" component="a" href="tel:+79280777722" color="#FED8B1" c={theme.colors.dark[6]}>
                        Позвонить
                    </Button>
                </div>
            </div>
        </div>
    ) : (
        <div className={classes.wrapper_contact}>
            <Dots className={classes.dots} style={{ right: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, bottom: 0 }} />
            <Dots
                className={classes.dots_center}
                style={{ left: "50%", top: "35%", transform: "translate(-50%, -50%)" }}
            />
            <Overlay color="#000" opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    {/* Contact Us{" "} */}
                    <Text inherit component="span" gradient={{ from: "pink", to: "yellow" }}>
                        Let's have a talk
                    </Text>
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description}>
                        Contact Us
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button
                        component="a"
                        href="https://dashboard.ensystainc.com/login.php"
                        // className={classes.control}
                        variant="gradient"
                        size="lg"
                        gradient={{ from: "#202A44", to: "#202A44", deg: 64 }}
                    >
                        Sign In
                    </Button>
                    <Button
                        className={cx(classes.control, classes.secondaryControl)}
                        size="lg"
                        onClick={() =>
                            scrollIntoView({
                                alignment: "center",
                            })
                        }
                    >
                        Contact form
                    </Button>
                </div>
            </div>
        </div>
    );
};

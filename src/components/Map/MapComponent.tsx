import { AspectRatio, Badge, Container, Flex, Group, Text } from "@mantine/core";
import classes from "./MapComponent.module.css";
import { Contacts } from "./Contacts";
import { useIntersectionObserver } from "@/hooks/intersection";

export function MapComponent() {
     const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
    });

    return (
        <Container
            pt={100}
            mb={30}
            size="xl"
            ref={ref}
            className={`opacity-0 transition-opacity duration-300 ${
                isIntersecting ? `animate__animated animate__pulse` : ""
            }`}
        >
            <Flex justify="center" align="center" direction="column">
                <Group justify="center">
                    <Badge size="lg" color="yellow.3" c="dark.6">
                        Контакты
                    </Badge>
                </Group>
                <Contacts />

                <Text c="dimmed" className={classes.description} ta="center" mt="md" size="xl">
                    Наша мастерская располагается здесь
                </Text>
            </Flex>
            <AspectRatio ratio={16 / 9}>
                <iframe
                    title="Yandex map"
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A2aec12a53509c35b887c80d68427394d76c61ea6db59adf721e5a00f39a602c1&amp;source=constructor"
                    width="800"
                    height="400"
                    style={{ border: 0, borderRadius: "40px" }}
                />
            </AspectRatio>
        </Container>
    );
}

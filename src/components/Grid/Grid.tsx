import { Grid, Skeleton, Image, Container, Flex, Group, Badge, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import classes from "./Grid.module.css";
import { useIntersectionObserver } from "@/hooks/intersection";

export function GridAsymmetrical() {
    const [loading, setLoading] = useState(true);
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
    });

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Container
            size="lg"
            ref={ref}
            className={`opacity-0 transition-opacity duration-300 ${
                isIntersecting ? `animate__animated animate__pulse` : ""
            }`}
        >
            <Flex justify="center" align="center" direction="column" mb={100} mt={100}>
                <Group justify="center">
                    <Badge size="lg" color="yellow.3" c="dark.6">
                        Выполненые работы
                    </Badge>
                </Group>
                <Text c="dimmed" className={classes.description} ta="center" mt="md" size="xl">
                    Наши услуги в одном месте
                </Text>
            </Flex>
            <Grid>
                <Grid.Col span={{ base: 12, xs: 3 }}>
                    {/* <Skeleton visible={loading} radius="xl"> */}
                    <Image
                        h={500}
                        src="/images/photo/1.jpeg"
                        radius="xl"
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        className={classes.col}
                    />
                    {/* </Skeleton> */}
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 6 }}>
                    {/* <Skeleton visible={loading} radius="xl"> */}
                    <Image
                        h={500}
                        src="/images/photo/2.jpeg"
                        radius="xl"
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        className={classes.col}
                    />
                    {/* </Skeleton> */}
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 3 }}>
                    {/* <Skeleton visible={loading} radius="xl"> */}
                    <Image
                        h={500}
                        src="/images/photo/3.jpg"
                        radius="xl"
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        className={classes.col}
                    />
                    {/* </Skeleton> */}
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 6 }}>
                    {/* <Skeleton visible={loading} radius="xl"> */}
                    <Image
                        h={500}
                        src="/images/photo/4.jpg"
                        radius="xl"
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        className={classes.col}
                    />
                    {/* </Skeleton> */}
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 3 }}>
                    {/* <Skeleton visible={loading} radius="xl"> */}
                    <Image
                        h={500}
                        src="/images/photo/5.jpg"
                        radius="xl"
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        className={classes.col}
                    />
                    {/* </Skeleton> */}
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 3 }}>
                    {/* <Skeleton visible={loading} radius="xl"> */}
                    <Image
                        h={500}
                        src="/images/photo/13.jpeg"
                        radius="xl"
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        className={classes.col}
                    />
                    {/* </Skeleton> */}
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }}>
                    {/* <Skeleton visible={loading} radius="xl"> */}
                    <Image
                        h={500}
                        src="/images/photo/7.jpg"
                        radius="xl"
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        className={classes.col}
                    />
                    {/* </Skeleton> */}
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }}>
                    {/* <Skeleton visible={loading} radius="xl"> */}
                    <Image
                        h={500}
                        src="/images/photo/8.jpeg"
                        radius="xl"
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        className={classes.col}
                    />
                    {/* </Skeleton> */}
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 4 }}>
                    {/* <Skeleton visible={loading} radius="xl"> */}
                    <Image
                        h={500}
                        src="/images/photo/14.jpeg"
                        radius="xl"
                        fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                        className={classes.col}
                    />
                    {/* </Skeleton> */}
                </Grid.Col>
            </Grid>
        </Container>
    );
}

import {
    IconBrandTelegram,
    IconBrandWhatsapp,
    IconDeviceMobileVibration,
    IconMail,
    IconPhone,
} from "@tabler/icons-react";
import {
    Anchor,
    Badge,
    Button,
    Card,
    Container,
    Flex,
    Group,
    SimpleGrid,
    Text,
    Title,
    useMantineTheme,
} from "@mantine/core";
import classes from "./FeaturesCards.module.css";
import { FullScreenModal } from "../FullScreenModal/FullScreenModal";
import { useDisclosure } from "@mantine/hooks";

const mockdata = [
    {
        title: "Телефон",
        description: "Позвонить менеджеру",
        additional: "+7 928 077 77 22",
        icon: IconDeviceMobileVibration,
    },
    {
        title: "Telegram",
        description: "Задайте нам вопрос в telegram",
        additional: "Написать в telegram",
        icon: IconBrandTelegram,
    },
    {
        title: "Whatsapp",
        description: "Задайте нам вопрос в whatsapp",
        additional: "Написать в whatsapp",
        icon: IconBrandWhatsapp,
    },
];

export function FeaturesCards() {
    const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

    const features = mockdata.map((feature, i) => (
        <Card key={feature.title} shadow="md" radius="xl" className={classes.card} padding="xl" bg="blue.6" >
            { opened && <FullScreenModal opened={opened} close={close}/>}
            <feature.icon
                size={50}
                stroke={2}
                color="white"
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md" c="white">
                {feature.title}
            </Text>
            <Text fz="sm"  mt="sm" pb="xl" c="white">
                {feature.description}
            </Text>
            {i === 0 ? (
                <Flex justify="start" gap="sm" c="primary" className={classes.additional}>
                    <IconPhone color="white" />
                    <Anchor
                        variant="gradient"
                        href="tel:+79280777722"
                        gradient={{ from: "gray.2", to: "gray.0", deg: 64 }}
                        target="_blank"
                    >
                        {feature.additional}
                    </Anchor>
                </Flex>
            ) : i === 1 ? (
                <Button
                    variant="gradient"
                    color="dark"
                    mt={10}
                    className={classes.additional}
                    gradient={{ from: "gray.0", to: "gray.3", deg: 64 }}
                    onClick={open}
                    radius="xl"
                >
                    <Anchor href="https://wa.me/79280777722" target="_blank" underline="never" c="dark" fw={500}>
                        {feature.additional}
                    </Anchor>
                </Button>
            ) : (
                <Button
                    variant="gradient"
                    color="dark"
                    mt={10}
                    className={classes.additional}
                    gradient={{ from: "gray.0", to: "gray.3", deg: 64 }}
                    radius="xl"
                >
                    <Anchor href="https://wa.me/79280777722" target="_blank" underline="never" c="dark" fw={500}>
                        {feature.additional}
                    </Anchor>
                </Button>
            )}
        </Card>
    ));

    return (
        <Container size="lg" pt={100}>
            <Group justify="center">
                <Badge variant="gradient" size="lg" gradient={{ from: "yellow.3", to: "yellow.6", deg: 64 }} c="dark.6">
                    Контакты
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Want to get in touch?
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                We'd love to hear from you. Here's how you can reach us...
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    );
}

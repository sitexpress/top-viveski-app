import { IconHeart } from "@tabler/icons-react";
import {
    AspectRatio,
    Badge,
    Button,
    Card,
    Center,
    Flex,
    Group,
    Image,
    Text,
    useMantineTheme,
} from "@mantine/core";
import classes from "./BadgeCard.module.css";
import ReactPlayer from "react-player";
import { modals } from "@mantine/modals";
import CallBackForm from "../CallBackForm/CallBackForm";
import { useState } from "react";
import { BadgesType } from "../FeaturesAsymmetrical/FeaturesAsymmetrical";
import "../../../local.fonts/PressStart.css";

type BadgeCard = {
    image: string;
    title: string;
    country: string;
    description: string;
    fitted: string;
    discount: number;
    price: number;
    badges: BadgesType[];
};

export const BadgeCard: React.FC<BadgeCard> = ({
    image,
    title,
    country,
    description,
    fitted,
    discount,
    price,
    badges,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const items = { image, title, country, description, fitted, discount, price, badges };
    const theme = useMantineTheme();

    // const featuresB = badges.map((feature) => (
    //     <Center key={feature.label}>
    //         <feature.icon size={22} className={classes.icon} stroke={1.5} />
    //         <Text size="xs" c="dimmed">
    //             {feature.label}
    //         </Text>
    //     </Center>
    // ));

    const openModal = (titleValue: string) => {
        setIsLoading(true);
        modals.open({
            title: (
                <Flex justify="center" align="center" pl="md">
                    <Text fw={500} size="xl"  c="dark.8" >
                        Заявка
                    </Text>
   
                </Flex>
            ),
            children: (
                    <CallBackForm modalMode="callBack" {...items} setClose={() => modals.closeAll()} />
            ),
        });
        setIsLoading(false);
    };

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                {image ? (
                    <Image src={image} alt={title} height={180} />
                ) : (
                    <AspectRatio ratio={16 / 9}>
                        <ReactPlayer
                            url="https://player.vimeo.com/video/1050391735?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameborder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                            playing={false}
                            loop
                            width="100%"
                            height="auto"
                            playIcon={<IconHeart />}
                            controls
                        />
                    </AspectRatio>
                )}
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group justify="space-between" mt="md">
                    <div>
                        <Text fz="lg" fw={500}>
                            {title}
                        </Text>
                        {/* <Text fz="xs" c="dimmed">
                            Free consultation
                        </Text> */}
                    </div>
                    <div>
                        {/* <Badge size="sm" variant="light">
                            {country}
                        </Badge> */}
                        <Badge variant="outline" ml="xs">
                            - ${discount}% на весну 2025
                        </Badge>
                    </div>
                </Group>
                <Text fz="sm" mt="xs">
                    {description}
                </Text>
                {/* <Text mt="md" className={classes.label} c="dimmed">
                    {fitted}
                </Text> */}
            </Card.Section>

            {/* <Card.Section className={classes.section}>
                <Group gap={7} mt={5}>
                    {featuresB}
                </Group>
            </Card.Section> */}

            <Card.Section className={classes.section}>
                <Group gap={30} mt="xs">
                    {/* {!price ? (
                        <div>
                            <Text mb={5} fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }}>
                                From:
                            </Text>
                            <Text fz="xl" fw={700} td="line-through" style={{ lineHeight: 1 }}>
                                $ 300
                            </Text>
                            <Text mt={5} fz="sm" c="dimmed" fw={600} style={{ lineHeight: 1 }}>
                                Included with service
                            </Text>
                        </div>
                    ) : (
                        <div>
                            <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mb={5}>
                                From:
                            </Text>
                            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                                $ {Number(price).toFixed(2)}
                            </Text>
                        </div>
                    )} */}
                    <Button
                        loading={isLoading}
                        radius="md"
                        onClick={() => openModal(title)}
                        // c={theme.colors.dark[6]}
                        color="#202A44"
                        // style={{ flex: 1, width: "100%", fontFamily: "PressStart", fontSize: "10px" }}
                        style={{ flex: 1, width: "100%" }}
                    >
                        оставить заявку
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
};

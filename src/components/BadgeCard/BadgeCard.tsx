import { Card, Flex, Group, Image, Text } from "@mantine/core";
import classes from "./BadgeCard.module.css";

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

export const BadgeCard: React.FC<BadgeCard> = ({ image, title, description }) => {
    return (
        <>
            <Card radius="xl" p="md" className={`animate__animated animate__headShake ${classes.card}`}>
                <Card.Section>
                    <Image src={image} alt={title} height={180} className={classes.img} />
                </Card.Section>
            </Card>
            <Flex justify="space-between" direction="column">
                <Text fz="md" fw={500} ta="center" p={20}>
                    {title}
                </Text>
                <Text fz="sm" mt="xs" ta="center" p={20}>
                    {description}
                </Text>
            </Flex>
        </>
    );
};

import {
    Icon,
    IconBalloon,
    IconBarrierBlock,
    IconBrandDocker,
    IconBrandYoutube,
    IconBuildings,
    IconBulldozer,
    IconCake,
    IconCapture,
    IconChartColumn,
    IconCylinder,
    IconDrone,
    IconFrustum,
    IconGlobe,
    IconLeaf2,
    IconMessageChatbot,
    IconProps,
    IconRotate3d,
    IconStopwatch,
} from "@tabler/icons-react";
import { Badge, Button, Container, Flex, Group, SimpleGrid, Text, Title, useMantineTheme } from "@mantine/core";
import classes from "./FeaturesAsymmetrical.module.css";
import { BadgeCard } from "../BadgeCard/BadgeCard";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
    icon: React.FC<any>;
    title: string;
    description: string;
}

export type BadgesType = {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    label: string;
};

export type BadgesMockdataType = {
    image: string;
    title: string;
    country: string;
    description: string;
    fitted: string;
    discount: number;
    price: number;
    badges: BadgesType[];
};

function Feature({ icon: Icon, title, description, className, ...others }: FeatureProps) {
    return (
        <div className={classes.feature} {...others}>
            <div className={classes.overlay} />

            <div className={classes.content}>
                <Icon size={38} className={classes.icon} stroke={1.5} />
                <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title_sub}>
                    {title}
                </Text>
                <Text c="dimmed" fz="sm">
                    {description}
                </Text>

                <Button
                    variant="gradient"
                    color="dark"
                    mt={10}
                    gradient={{ from: "#3F4AB7", to: "rgb(96, 109, 255)", deg: 64 }}
                >
                    Book Now
                </Button>
            </div>
        </div>
    );
}

const mockdata = [
    {
        icon: IconDrone,
        title: "AERIAL PHOTOGRAPHY",
        description:
            "With the latest high-tech unmanned aerial equipment, obtaining a bird's-eye view has never been simpler!",
    },
    {
        icon: IconBrandYoutube,
        title: "VIDEO EDITING",
        description:
            "Transform a routine moment into a customized cinematic experience. Life has never seemed so vibrant!",
    },
    {
        icon: IconFrustum,
        title: "3D MAPPING",
        description:
            "Reduce those man-hours by 50%! Land surveying can be completed in minutes by utilizing pre-mapped flight plans even before we reach the job site.",
    },
];

export const badgesMockdata: BadgesMockdataType[] = [
    {
        image: "/images/badges/image-1.jpg",
        title: "Изготовление наружных рекламных конструкций",
        country: "New-York",
        description:
            "Рекламные конструкции, световые вывески, информационные стенды, указатели, широкоформатная печать, брендирование стендов и транспортных средств, оформление автозаправочных станций (АЗС).",
        fitted: "Ideal for creating professional videos. for birthdays, gigs, baby showers, or any other occasion",
        discount: 5,
        price: 400,
        badges: [
            { icon: IconBuildings, label: "Aerial imagery"},
            { icon: IconCake, label: "Birthdays" },
            { icon: IconLeaf2, label: "Nature" },
            { icon: IconBalloon, label: "Weddings" },
            { icon: IconChartColumn, label: "Gigs" },
        ],
    },
    {
        image: "/images/badges/image-2.jpg",
        title: "Печатные материалы и корпоративные сувениры",
        country: "New-York",
        description:
            "Уникальные открытки, рекламные листовки, информационные брошюры, визитные карточки, дисконтные карты, настенные и настольные календари, флаги, сувенирные брелоки.",
        fitted: "Ideal for realtors or those who have an agency",
        discount: 5,
        price: 400,
        badges: [
            { icon: IconBuildings, label: "Real estate" },
            { icon: IconBuildings, label: "Aerial imagery" },
            { icon: IconCylinder, label: "Other objects" },
        ],
    },
    {
        image: "/images/badges/image-3.jpg",
        title: "Печать с использованием УФ-технологий на разнообразных материалах и поверхностях.",
        country: "New-York",
        description:
            "Художественные картины, декоративные витражи, фотообои, геральдические гербы, настенные часы, фотожалюзи, фамильные символы и другие уникальные изделия.",
        fitted: "Ideal for builders and construction companies",
        discount: 5,
        price: 300,
        badges: [
            { icon: IconBarrierBlock, label: "Construction" },
            { icon: IconMessageChatbot, label: "Support included" },
            { icon: IconBulldozer, label: "On site" },
            { icon: IconCapture, label: "Capture real-time" },
        ],
    },
    {
        image: "/images/badges/image-4.jpg",
        title: "Лазерная резка. По разным неметаллическим материалам.",
        country: "New-York",
        description:
            "Древесина, фанера, МДФ/ДСП, шпон, акриловое стекло, ПЭТ, полистирол, натуральная и искусственная кожа, а также прочие неметаллические материалы.",
        fitted: "Ideal for builders and construction companies",
        discount: 5,
        price: 450,
        badges: [
            { icon: IconBarrierBlock, label: "Construction" },
            { icon: IconRotate3d, label: "3D Models" },
            { icon: IconStopwatch, label: "Fast delivery" },
            { icon: IconMessageChatbot, label: "Support included" },
            { icon: IconBulldozer, label: "On site" },
            { icon: IconCapture, label: "Capture real-time" },
        ],
    },
    {
        image: "/images/badges/image-5.jpg",
        title: "Реализация материалов для рекламных целей.",
        country: "New-York",
        description:
            "Листы ПВХ, акриловое стекло, рекламная пленка, светоотражающая пленка, декоративная/винтажная пленка, автомобильный винил, клеевые материалы, люверсы, профили и уголки для изготовления световых коробов.",
        fitted: "Ideal for builders and construction companies",
        discount: 5,
        price: 450,
        badges: [
            { icon: IconBarrierBlock, label: "Construction" },
            { icon: IconGlobe, label: "Surveying" },
            { icon: IconStopwatch, label: "Fast delivery" },
            { icon: IconMessageChatbot, label: "Support included" },
            { icon: IconBulldozer, label: "On site" },
            { icon: IconCapture, label: "Capture real-time" },
            { icon: IconBrandDocker, label: "Environmental monitoring" },
        ],
    },
    // {
    //     image: "",
    //     title: "Ensysta Dashboard",
    //     country: "New-York",
    //     description:
    //         "Our dashboard centralizes access to all deliverables—videos, photos, interactive 3D maps, and photogrammetry models. With its user-friendly, shareable platform, it streamlines communication, keeps teams aligned, and enhances decision-making. By providing full project transparency and actionable insights, Ensysta Dashboard ensures you stay in control from start to finish.",
    //     fitted: "Ideal for builders and construction companies",
    //     discount: 5,
    //     price: 0,
    //     badges: [
    //         { icon: IconBarrierBlock, label: "Construction" },
    //         { icon: IconStopwatch, label: "Fast delivery" },
    //         { icon: IconMessageChatbot, label: "Support included" },
    //         { icon: IconShieldHalfFilled, label: "Safe and secure store" },
    //         { icon: IconDeviceLaptop, label: "Everything is in one web-app" },
    //     ],
    // },
];

type FeaturesAsymmetricalType = {
    mode: "features-asymmetrical" | "badge-cards";
    targetRef?: any;
};

export const FeaturesAsymmetrical: React.FC<FeaturesAsymmetricalType> = ({ mode, targetRef }) => {
    const theme = useMantineTheme()
    const items = mockdata.map((item) => <Feature {...item} key={item.title} />);
    // const badgeItems = badgesMockdata.map((item) => <BadgeCard key={item.title} {...item} />);
    const badgeItems = badgesMockdata.map((item) => <BadgeCard key={item.title} {...item} />);

    return (
        <Flex
            justify="center"
            align="center"
            direction="column"
            pt={{ base: 30, sm: 30, md: 30, lg: 10, xg: 110, xl: 100 }}
            mb={30}
            gap={100}
        >
            <Flex justify="center" align="center" direction="column" ref={targetRef}>
                <Group justify="center">
                    <Badge
                        size="lg"
                        color="#FED8B1"
                        c={theme.colors.dark[6]}
                    >
                        Наши услуги
                    </Badge>
                </Group>

                <Title order={2} className={classes.title} ta="center" mt="sm">
                    Все наши услуги в одном месте
                </Title>

                <Text c="dimmed" className={classes.description} ta="center" mt="md">
                    Оставьте заявку и менеджер обязательно с Вами свяжется.
                </Text>
            </Flex>
            <Container size="xl">
                <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
                    {mode === "badge-cards" ? badgeItems : mode === "features-asymmetrical" ? items : ""}
                </SimpleGrid>
            </Container>
        </Flex>
    );
};

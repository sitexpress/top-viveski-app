import {
    Icon,
    IconBalloon,
    IconBarrierBlock,
    IconBrandDocker,
    IconBuildings,
    IconBulldozer,
    IconCake,
    IconCapture,
    IconChartColumn,
    IconCylinder,
    IconGlobe,
    IconLeaf2,
    IconMessageChatbot,
    IconProps,
    IconRotate3d,
    IconStopwatch,
} from "@tabler/icons-react";
import classes from "./FeaturesAsymmetrical.module.css";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Card, Flex, Group, Image, Text, Badge, SimpleGrid } from "@mantine/core";
import { useIntersectionObserver } from "@/hooks/intersection";

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
            { icon: IconBuildings, label: "Aerial imagery" },
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
];

type FeaturesAsymmetricalType = {
    mode: "features-asymmetrical" | "badge-cards";
    targetRef?: any;
};

export const FeaturesAsymmetrical: React.FC<FeaturesAsymmetricalType> = ({ targetRef }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
    });

    const badgeItems = badgesMockdata.map((item, i) => (
        <div
            key={i}
            ref={ref}
            className={`opacity-0 transition-opacity duration-300 ${
                isIntersecting ? `animate__animated animate__pulse` : ""
            }`}
        >
            <Card shadow="md" radius="xl" padding="0" className={classes.card}>
                <Image src={item.image} alt={item.title} width="300" height="300" className={classes.img_catalog} />
            </Card>
            <Text fz="sm" c="dimmed" mt="sm" ta="center">
                {item.title}
            </Text>
        </div>
    ));

    return (
        <Flex
            justify="center"
            align="center"
            direction="column"
            pt={{ base: 30, sm: 30, md: 30, lg: 10, xg: 110, xl: 100 }}
            mb={30}
            p={20}
        >
            <Flex justify="center" align="center" direction="column" ref={targetRef}>
                <Group justify="center">
                    <Badge size="lg" color="yellow.3" c="dark.6">
                        Наши услуги
                    </Badge>
                </Group>
                <Text c="dimmed" className={classes.description} ta="center" mt="md" size="xl">
                    Наши услуги в одном месте
                </Text>
            </Flex>

            {/* <SimpleGrid cols={{ base: 2}} spacing="xl" mt={50}> */}
            <SimpleGrid cols={{ base: 2, xs: 3, sm: 3, md: 3, lg: 5, xl: 5 }} spacing="xl" mt={50}>
                {badgeItems}
            </SimpleGrid>
        </Flex>
    );
};

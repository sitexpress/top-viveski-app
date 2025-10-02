import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Badge, Card, Container, Group, Image, SimpleGrid, Text, Title } from "@mantine/core";
import classes from "./FeaturesGrid.module.css";

export const MOCKDATA = [
    {
        // icon: IconGauge,
        image: "/images/badges/image-1.jpg",
        title: "Изготовление наружных рекламных конструкций",
        description:
            "Рекламные конструкции, световые вывески, информационные стенды, указатели, широкоформатная печать, брендирование стендов, брендирование транспортных средств, оформление АЗС",
    },
    {
        // icon: IconUser,
        image: "/images/badges/image-2.jpg",
        title: "Печатные материалы и корпоративные сувениры",
        description:
            "Уникальные открытки, рекламные листовки, информационные брошюры, визитные карточки, дисконтные карты, настенные и настольные календари, флаги, сувенирные брелоки",
    },
    {
        // icon: IconCookie,
        image: "/images/badges/image-3.jpg",
        title: "Печать с использованием УФ-технологий на разнообразных материалах и поверхностях.",
        description:
            "Художественные картины, декоративные витражи, фотообои, фотожалюзи, фамильные символы, другие уникальные изделия...",
    },
    {
        // icon: IconLock,
        image: "/images/badges/image-4.jpg",
        title: "Лазерная резка. По разным неметаллическим материалам.",
        description:
            "Древесина, фанера, МДФ/ДСП, шпон, ПЭТ, полистирол, натуральная и искусственная кожа, прочие неметаллические материалы",
    },
    {
        // icon: IconMessage2,
        image: "/images/badges/image-5.jpg",
        title: "Реализация материалов для рекламных целей.",
        description:
            "Листы ПВХ, акриловое стекло, рекламная пленка, светоотражающая пленка, декоративная/винтажная пленка, автомобильный винил, клеевые материалы, люверсы",
    },
];

interface FeatureProps {
    //   icon: React.FC<any>;
    image: string;
    title: string;
    description: React.ReactNode;
}

type FeaturesGridType = {
    targetRef: any;
};

export function Feature({ image, title, description }: FeatureProps) {
    return (
        <div>
            {/* <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size={18} stroke={1.5} />
      </ThemeIcon> */}
            <Card shadow="md" radius="xl" padding="0" className={classes.card} >
                <Image src={image} alt={title} width="200" height="200" className={classes.img_catalog} />
            </Card>
            <Text mt="sm" mb={7} ta="center">
                {title}
            </Text>
            <Text size="sm" c="dimmed" lh={1.6}>
                {description}
            </Text>
        </div>
    );
}

export const FeaturesGrid: React.FC<FeaturesGridType> = ({ targetRef }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
    });
    const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

    return (
        <Container className={classes.wrapper}>
            <Group justify="center">
                <Badge size="lg" color="yellow.3" c="dark.6">
                    Услуги
                </Badge>
            </Group>
            <Title className={classes.title} ta="center">Предлагаем, разрабатываем, устанавливаем!</Title>

            <Container size={560} p={0} ref={targetRef}>
                <Text c="dimmed" className={classes.description} ta="center" mt="md" size="sm">
                    Полный спектр рекламных услуг «под ключ» - от первоначальной идеи и разработки уникального стиля до изготовления и профессионального монтажа
                    наружных конструкций любой сложности.
                </Text>
            </Container>

            <SimpleGrid
                className={`opacity-0 transition-opacity duration-300 ${
                    isIntersecting ? `animate__animated animate__pulse` : ""
                }`}
                // @ts-ignore
                ref={ref}
                mt={60}
                cols={{ base: 1, xs: 2, sm: 3, md: 3 }}
                spacing={{ base: "md", md: 50 }}
                verticalSpacing={{ base: "xl", md: 50 }}
            >
                {features}
            </SimpleGrid>
        </Container>
    );
};

import { Carousel } from "@mantine/carousel";
import { Progress, Title, Image } from "@mantine/core";
import { EmblaCarouselType } from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import classes from "./PortfolioCarousel.module.css";

const data = [
    {
        title: "Фото: №1",
        image: "/images/photo/1.jpeg",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №2",
        image: "/images/photo/1.jpeg",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №3",
        image: "/images/photo/1.jpeg",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №5",
        image: "/images/photo/1.jpeg",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №6",
        image: "/images/photo/1.jpeg",
        date: "апрель, 2024",
    },
    {
        title: "Фото: №7",
        image: "/images/photo/1.jpeg",
        date: "апрель, 2024",
    },
];

const Item = data.map((item) => {
    return (
        <Carousel.Slide key={item.title} className={classes.carousel}>
            <Image radius="xl" fit="contain" src={item.image} className={classes.image} />
        </Carousel.Slide>
    );
});

export const PortfolioCarousel = () => {
    const [scrollProgressFolio, setScrollProgressFolio] = useState(0);
    const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

    const handleScroll = useCallback(() => {
        if (!embla) {
            return;
        }
        const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
        setScrollProgressFolio(progress * 100);
    }, [embla, setScrollProgressFolio]);

    useEffect(() => {
        if (embla) {
            embla.on("scroll", handleScroll);
            handleScroll();
        }
    }, [embla]);

    const [scrollProgressCeiling, setScrollProgressFolioCeiling] = useState(0);
    const [emblaCeiling, setEmblaCeiling] = useState<EmblaCarouselType | null>(null);

    const handleScrollCeiling = useCallback(() => {
        if (!emblaCeiling) {
            return;
        }
        const progressFolio = Math.max(0, Math.min(1, emblaCeiling.scrollProgress()));
        setScrollProgressFolioCeiling(progressFolio * 100);
    }, [emblaCeiling, setScrollProgressFolioCeiling]);

    useEffect(() => {
        if (emblaCeiling) {
            emblaCeiling.on("scroll", handleScrollCeiling);
            handleScrollCeiling();
        }
    }, [emblaCeiling]);

    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <div className={classes.container}>
            <Title
                order={2}
                // mt="sm"
                mb="xl"
                ta="center"
                className={classes.description}
                c="dark.5"
            >
                Портфолио
            </Title>

            <Carousel
                height={"auto"}
                slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
                // slideGap={{ base: 0, sm: "md" }}
                loop
                align="start"
                plugins={[autoplay.current]}
                draggable
                controlSize={30}
                withControls
                controlsOffset={10}
                slideGap="lg"
                // emblaptions={{ dragFree: true }}
                getEmblaApi={setEmbla}
                initialSlide={0}
            >
                {Item}
            </Carousel>
            <Progress.Root maw={300} size="lg" mt="xl" mx="auto" bg="dark.1" radius="40px">
                <Progress.Section value={scrollProgressFolio} bg="dark.6" color="dark.6">
                    <Progress.Label style={{ fontFamily: "Nautilus", fontSize: "10px" }} color="dark.6">
                        Топ вывески
                    </Progress.Label>
                </Progress.Section>
            </Progress.Root>
        </div>
    );
};

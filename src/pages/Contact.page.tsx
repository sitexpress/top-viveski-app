import { Header } from "@/components/Header/Header";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import { FeaturesCards } from "@/components/FeaturesCard/FeaturesCards";
import { MapComponent } from "@/components/Map/MapComponent";
import { Divider, LoadingOverlay } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { SideBar } from "@/components/SideBar/SideBar";

export function ContactPage() {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    });

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 10000);
        };
    }, []);

    if (isLoading) {
        return (
            <LoadingOverlay
                visible={isLoading}
                zIndex={1000}
                overlayProps={{ radius: "sm", blur: 2 }}
                loaderProps={{ color: "blue", type: "bars" }}
            />
        );
    }

    return (
        <>
            <SideBar />
            <Header />
            <HeroImageBackground page="contacts" scrollIntoView={scrollIntoView} />
            <FeaturesCards />
            <Divider label="Топ вывески" pt={100} mb={50} />
            <MapComponent />
            {/* <GetInTouch targetRef={targetRef}/> */}
            <FooterLinks />
        </>
    );
}

import { Header } from "@/components/Header/Header";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import { FeaturesCards } from "@/components/FeaturesCard/FeaturesCards";
import { GetInTouch } from "@/components/GetInTouch/GetInTouch";
import { MapComponent } from "@/components/Map/MapComponent";
import { Divider } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";

export function ContactPage() {
        const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
            offset: 60,
          });

    return ( 
        <>
            <Header />
            <HeroImageBackground page="contacts" scrollIntoView={scrollIntoView} />
            <FeaturesCards />
            <Divider label="Ensysta Inc." pt={100} mb={50} />
            <MapComponent />
            <GetInTouch targetRef={targetRef}/>
            <FooterLinks />
        </>
    );
}

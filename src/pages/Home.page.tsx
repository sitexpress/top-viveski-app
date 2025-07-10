import { Header } from "@/components/Header/Header";
// import { Welcome } from "../components/Welcome/Welcome";
import { CardsCarousel } from "@/components/CardsCarousel/CardsCarousel";
import { FeaturesAsymmetrical } from "@/components/FeaturesAsymmetrical/FeaturesAsymmetrical";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import { notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { IconCookie, IconCookieFilled, IconRosetteDiscountCheckFilled } from "@tabler/icons-react";
import { Group, rem, Button, Text, Divider } from "@mantine/core";
import classes from "./Home.module.css";
import { MapComponent } from "@/components/Map/MapComponent";
import { GetInTouch } from "@/components/GetInTouch/GetInTouch";
import { Banner } from "@/components/Banner/Banner";
import { useScrollIntoView } from '@mantine/hooks';
import { GridAsymmetrical } from "@/components/Grid/Grid";
import { PortfolioCarousel } from "@/components/PortfolioCarousel/PortfolioCarousel";


export function HomePage() {
    // const hideNotificationsHandler = (cookieNotificationId: string) => {
    //     notifications.hide(cookieNotificationId);
    //     // notifications.cleanQueue();
    //     notifications.clean();
    // };
    // useEffect(() => {
    //     setTimeout(() => {
    //         const cookieNotificationId = notifications.show({
    //             title: "Cookie",
    //             message: (
    //                 <Group>
    //                     We use cookies for essential website functions and to better understand how you use our site, so
    //                     we can create the best possible experience for you.
    //                     <Button variant="gradient" onClick={() => hideNotificationsHandler(cookieNotificationId)}>
    //                         <IconRosetteDiscountCheckFilled />
    //                         <Text pl="xs"> Got it</Text>
    //                     </Button>
    //                 </Group>
    //             ),
    //             color: "light-dark(var(--mantine-color-gray-8) , var(--mantine-color-dark-6))",
    //             autoClose: false,
    //             withCloseButton: false,
    //             closeButtonProps: IconCookie,
    //             position: "bottom-center",
    //             icon: <IconCookieFilled style={{ width: rem(48), height: rem(48) }} />,
    //             loading: false,
    //             withBorder: true,
    //             // classNames: classes,
    //         });
    //     }, 0);    
    // }, []);

    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60, 
      });

    return (
        <>
            <Header />
            <HeroImageBackground page="home" scrollIntoView={scrollIntoView} />
            <FeaturesAsymmetrical mode="badge-cards" targetRef={targetRef}/>
            <GridAsymmetrical/>
            {/* <PortfolioCarousel/> */}
            <Banner/>
            {/* <Divider label="Топ Вывески" pt={40} mb={50} /> */}
            <MapComponent />
            <FooterLinks />
        </>
    );
}

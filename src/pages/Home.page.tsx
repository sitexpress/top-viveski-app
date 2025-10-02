import { Header } from "@/components/Header/Header";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import { MapComponent } from "@/components/Map/MapComponent";
import { Banner } from "@/components/Banner/Banner";
import { useScrollIntoView } from '@mantine/hooks';
import { GridAsymmetrical } from "@/components/Grid/Grid";
import { FeaturesGrid } from "@/components/Features/FeaturesGrid";


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
            <FeaturesGrid targetRef={targetRef}/>
            <GridAsymmetrical/>
            <MapComponent />
            <FooterLinks />
        </>
    );
}

import { Button, Card, Overlay, Text } from "@mantine/core";
import classes from "./Banner.module.css";
import { modals } from "@mantine/modals";
import { useState } from "react";
import CallBackForm from "../CallBackForm/CallBackForm";

export function Banner() {
    const [isLoading, setIsLoading] = useState(false);
    const openModal = (titleValue: string) => {
        setIsLoading(true);

        modals.open({
            title: (
                <Text fw={500} size="xl" ta="center" c="dark.8" pl="md">
                    Callback-order form:
                </Text>
            ),
            children: (
                <>
                    <Text size="sm" ta="center" c="dimmed">
                        Please fill in the form so that we can get in touch with you.
                    </Text>
                    <CallBackForm
                        modalMode="callBack"
                        title={titleValue}
                        fitted="Perfect for you, if you want to make a video"
                        setClose={() => modals.closeAll()}
                    />
                </>
            ),
        });
        setIsLoading(false);
    };  
    return (
        <Card radius="none" className={classes.card} mt={120}>
            <Overlay className={classes.overlay} opacity={0.7} zIndex={0} />

            <div className={classes.content}>
                <Text size="lg" fw={700} className={classes.title}>
                    «Яркие идеи. Видимые результаты. Ваш успех начинается с нас!»
                </Text>

                <Text size="md" className={classes.description} pt="md" ta="justify">
                    «Топ Вывески» — ваш надежный партнер в создании яркой и эффективной рекламы! Мы производим
                    качественные вывески, лайтбоксы и рекламную продукцию, используя современные технологии и материалы.
                    Обращайтесь к нам за индивидуальным подходом, оперативным исполнением и гарантией долговечности. С
                    нами ваша реклама станет заметной и запоминающейся!
                </Text>

                {/* <Button
                    className={classes.action}
                    variant="white"
                    color="dark"
                    size="xs"
                    onClick={() => openModal("Aerial Media Content")}
                >
                    Book callback now
                </Button> */}
            </div>
        </Card>
    );
}

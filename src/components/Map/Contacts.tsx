import { IconMapPin, IconPhone, IconSun } from "@tabler/icons-react";
import { Box, Stack, Text, Group } from "@mantine/core";
import classes from "./Contact.module.css";

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
    icon: typeof IconSun;
    title: React.ReactNode;
    description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
    return (
        <Group ta="start" >
            <div className={classes.wrapper} {...others}>
                <Box mr="md">
                    <Icon size={24} />
                </Box>

                <div>
                    <Text size="xs" c="white">
                        {title}
                    </Text>
                    <Text c="white">{description}</Text>
                </div>
            </div>
        </Group>
    );
}

const MOCKDATA = [
    // { title: "Почта", description: "hello@mantine.dev", icon: IconAt },
    { title: "Телефон", description: "+7(928)077-77-22", icon: IconPhone },
    { title: "Адрес", description: "Кабардино-Балкарская Республика, Нальчик, Кабардинская улица, 152", icon: IconMapPin },
    { title: "Часы работы", description: "9:00. – 18:00.", icon: IconSun },
];

export function Contacts() {
    const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack bg="blue.6" w="100%"  style={{borderRadius: "40px"}} mt={40} p={20} c="white">{items}</Stack>;
}

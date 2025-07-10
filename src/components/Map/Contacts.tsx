import { IconAt, IconMapPin, IconPhone, IconSun } from "@tabler/icons-react";
import { Box, Stack, Text, Group, Container } from "@mantine/core";
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
                    <Text size="xs" c="dark.6">
                        {title}
                    </Text>
                    <Text c="dark.6">{description}</Text>
                </div>
            </div>
        </Group>
    );
}

const MOCKDATA = [
    { title: "Email", description: "hello@mantine.dev", icon: IconAt },
    { title: "Phone", description: "+49 (800) 335 35 35", icon: IconPhone },
    { title: "Address", description: "844 Morris Park avenue", icon: IconMapPin },
    { title: "Working hours", description: "8 a.m. – 11 p.m.", icon: IconSun },
];

export function Contacts() {
    const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
    return <Stack bg="blue.2" w="100%"  style={{borderRadius: "40px"}} mt={40} p={20}>{items}</Stack>;
}

import { Anchor, Image } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import classes from "./SideBar.module.css";

export const SideBar = () => {
    return (
        <Anchor href="https://wa.me/79280777722" className={classes.wrapper}>
            <IconBrandWhatsapp size="xl" color="#37b24d" className={classes.icon}/>
        </Anchor>
    );
};

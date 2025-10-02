import { Card, Container } from "@mantine/core";
import classes from "./Banner.module.css";

export function Banner() {
    return (
        <Container size="xxl" className={classes.wrapper}>
            <Card className={classes.card} mt={120} />;
        </Container>
    );
}

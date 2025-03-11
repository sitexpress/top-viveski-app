"use client";
import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Textarea, rem, Title } from "@mantine/core";
import { sendCustomerSupportMessage, sendMessage } from "../../../api/telegram";
import { notifications } from "@mantine/notifications";
import { IconX, IconCheck } from "@tabler/icons-react";
import { CheckBox } from "../CheckBox/CheckBox";
import { BadgesType } from "../FeaturesAsymmetrical/FeaturesAsymmetrical";
import "../../../local.fonts/PressStart.css";

// type CallBackFormType = {
//     modalMode: "callBack" | "contact-customer-support";
//     title: string;
//     fitted?: string;
//     price: number;
//     setClose: () => void;
//     // setIsOpen: (value: boolean) => void;
// };
type CallBackFormType = {
    modalMode: "callBack" | "contact-customer-support";
    image?: string;
    title: string;
    country?: string;
    description?: string;
    fitted?: string;
    discount?: number;
    price?: number;
    badges?: BadgesType[];
    setClose: () => void;
    // setIsOpen: (value: boolean) => void;
};

export default function CallBackForm({
    modalMode,
    image,
    title,
    country,
    description,
    fitted,
    discount,
    price,
    badges,
    setClose,
}: CallBackFormType) {
    const [submittedValues, setSubmittedValues] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [boxValue, setBoxValue] = useState<string[]>([]);

    const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
    const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

    const formOne = useForm({
        mode: "controlled",
        initialValues: {
            name: "",
            tel: "",
            message: "",
        },
        validate: {
            name: (value) =>
                value.length < 2 ? "Please enter your name. It should contain at least 2 letters!" : null,
            tel: (value) =>
                value.length < 11 || value.length > 11
                    ? "Please enter your phone number. The phone number format should be without the " +
                      " sign, and the number of digits must be 11!"
                    : null,
            // message: (value) => (value.length < 6 ? "Please describe in a bit more detail..." : null),
        },
    });

    const handleSubmitOne = async (values: typeof formOne.values): Promise<void> => {
        try {
            setIsLoading(true);
            const date = new Date();
            setSubmittedValues(JSON.stringify(values, null, 2));
            const line1 = `Заявка`;
            const line2 = `------------------------------`;
            const line3 = `Дата: ${date.getDate().toString().length < 2 ? `0${date.getDate()}` : date.getDate()}/${date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
            const line4 = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds()}`;
            const line5 = `------------------------------`;
            const line6 = `Выбранная услуга: ${boxValue.length === 0 ? "***Nothing has been selected" : boxValue.map((item) => item)}`;
            const line7 = `Имя клиента: ${values.name}`;
            const line8 = `Номер телефона": ${values.tel}`;
            const line9 = `Сообщение: ${values.message ? values.message : "без сообщения"}`;

            await sendMessage(line1, line2, line3, line4, line5, line6, line7, line8, line9);
            setClose();
            notifications.show({
                // position: "bottom-right",
                position: "top-center",
                title: (
                    <Title order={3} ta="center" c="green.8">
                        Успех!
                    </Title>
                ),
                message: `Форма успешно отправлена! Мы перезвоним вам в течение 10 минут, если это происходит в рабочее время 9:00 - 20:00 🌟`,
                withCloseButton: true,
                autoClose: 15000,
                color: "green.8",
                icon: checkIcon,
                loading: isLoading,
                radius: "lg",
                withBorder: true,
            });
        } catch (error) {
            // form.setFieldError("email", error as string);
            notifications.show({
                // position: "bottom-right",
                position: "top-center",
                title: "Что-то пошло не так",
                message: `Пожалуйста, проверьте Интернет подключение и попробуйте снова через несколько минут!🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "red",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } finally {
            setIsLoading(false);
            // setIsOpen(false);
        }
    };

    const formTwo = useForm({
        mode: "controlled",
        initialValues: {
            name: "",
            tel: "",
            message: "",
        },
        validate: {
            name: (value) =>
                value.length < 2 ? "Please enter your name. It should contain at least 2 letters!" : null,
            tel: (value) =>
                value.length < 11 || value.length > 11
                    ? "Please enter your phone number. The phone number format should be without the " +
                      " sign, and the number of digits must be 11!"  
                    : null,
            // message: (value) => (value.length < 6 ? "Please describe in a bit more detail..." : null),
        },
    });

    const handleSubmitTwo = async (values: typeof formTwo.values): Promise<void> => {
        try {
            setIsLoading(true);
            const date = new Date();
            setSubmittedValues(JSON.stringify(values, null, 2));
            const line1 = `Обратный звонок`;
            const line2 = `------------------------------`;
            const line3 = `Дата: ${date.getDate().toString().length < 2 ? `0${date.getDate()}` : date.getDate()}/${date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
            const line4 = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds()}`;
            const line5 = `------------------------------`;
            const line6 = `Имя клиента: ${values.name}`;
            const line7 = `Номер телефона": ${values.tel}`;
            const line8 = `Сообщение: ${values.message ? values.message : "без сообщения"}`;

            await sendCustomerSupportMessage(line1, line2, line3, line4, line5, line6, line7, line8);
            notifications.show({
                position: "top-center",
                title: (
                    <Title order={4} ta="center" c="green.8">
                         Успех!
                    </Title>
                ),
                message: `Форма успешно отправлена! Мы перезвоним вам в течение 10 минут, если это происходит в рабочее время 9:00 - 20:00 🌟`,
                withCloseButton: true,
                autoClose: 10000,
                color: "green",
                icon: checkIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } catch (error) {
            // form.setFieldError("email", error as string);
            notifications.show({
                position: "top-center",
                title: "Что-то пошло не так",
                message: `Пожалуйста, проверьте Интернет подключение и попробуйте снова через несколько минут!🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "red",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } finally {
            setIsLoading(false);
            setClose();
            formTwo.reset();
        }
    };

    return modalMode === "callBack" ? (
        <form
            onSubmit={formOne.onSubmit(handleSubmitOne)}
            style={{
                paddingBottom: "16px",
                paddingLeft: "16px",
                paddingRight: "16px",
            }}
        >
            <TextInput label="Имя" placeholder="Иван" key={formOne.key("name")} {...formOne.getInputProps("name")} />
            <TextInput
                label="Телефон"
                placeholder="89876543221"
                mt="md"
                key={formOne.key("tel")}
                {...formOne.getInputProps("tel")}
            />

            <Textarea
                label="Сообщение"
                placeholder="...дополнительное сообщение если нужно"
                mt="md"
                key={formOne.key("message")}
                {...formOne.getInputProps("message")}
            />
            <Button
                loading={isLoading}
                type="submit"
                mt="xl"
                // style={{ width: "100%", fontFamily: "PressStart", fontSize: "10px" }}
                style={{ width: "100%"}}
                // c={theme.colors.dark[6]}
                color="#202A44"
            >
                Отправить
            </Button>
            {!!fitted && !!discount && !!price && (
                <CheckBox
                    fitted={fitted}
                    price={price}
                    discount={discount}
                    title={title}
                    value={boxValue}
                    setValue={setBoxValue}
                />
            )}
        </form>
    ) : (
        // "contact-customer-support"
        <form
            onSubmit={formTwo.onSubmit(handleSubmitTwo)}
            style={{
                paddingBottom: "16px",
                paddingLeft: "16px",
                paddingRight: "16px",
            }}
        >
            <TextInput label="Name" placeholder="John" key={formTwo.key("name")} {...formTwo.getInputProps("name")} />
            <TextInput
                label="Телефон"
                placeholder="89876543221"
                mt="md"
                key={formTwo.key("tel")}
                {...formTwo.getInputProps("tel")}
            />

            <Textarea
                label="Сообщение"
                placeholder="Опишите свой вопрос..."
                mt="md"
                key={formTwo.key("message")}
                {...formTwo.getInputProps("message")}
            />
            <Button
                loading={isLoading}
                type="submit"
                mt="xl"
                // c={theme.colors.dark[6]}
                color="#202A44"
                // style={{ width: "100%", fontFamily: "PressStart", fontSize: "10px" }}
                style={{ width: "100%"}}
            >
                Отправить
            </Button>
        </form>
    );
}

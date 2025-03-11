import { Modal, Text } from "@mantine/core";
import CallBackForm from "../CallBackForm/CallBackForm";

type FullScreenModalType = {
    opened: boolean;
    close: () => void;
};
export const FullScreenModal: React.FC<FullScreenModalType> = ({ opened, close }) => {
    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title={
                    <Text fw={500} size="xl" ta="center" c="dark.8" pl="md">
                        Обратный звонок 
                    </Text>
                }
                fullScreen
                radius={0}
                transitionProps={{ transition: "fade-right", duration: 2000 }}
            >
                <CallBackForm
                    modalMode="contact-customer-support"
                    title="Contact Customer Support"
                    setClose={() => close()}
                />
            </Modal>
        </>
    );
};

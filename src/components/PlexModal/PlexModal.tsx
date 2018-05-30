import * as React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

interface Props {
    children: JSX.Element;
    title: JSX.Element | string;
    showModal: boolean;
}

class PlexModal extends React.Component<Props, {}> {
    render() {
        const { showModal, title, children } = this.props;

        return (
            <Modal isOpen={showModal}>
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>{children}</ModalBody>
            </Modal>
        );
    }
}

export { PlexModal };

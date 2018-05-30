import * as React from "react";

import {
    PlexStyledModal,
    PlexModalHeader,
    PlexModalTitle,
    PlexModalBody,
} from "./styledComponents";

interface Props {
    children: JSX.Element;
    title: JSX.Element | string;
    showModal: boolean;
}

class PlexModal extends React.Component<Props, {}> {
    render() {
        const { showModal, title, children } = this.props;

        return (
            <PlexStyledModal isOpen={showModal}>
                <PlexModalHeader>
                    <PlexModalTitle>{title}</PlexModalTitle>
                </PlexModalHeader>
                <PlexModalBody>{children}</PlexModalBody>
            </PlexStyledModal>
        );
    }
}

export { PlexModal };

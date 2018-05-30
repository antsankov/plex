import * as React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

interface Props {
    showWeb3BrowserModal: boolean;
}

interface State {
    showModal: boolean;
}

class MobileModal extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            showModal: false,
        };
    }

    componentDidMount() {
        if (this.props.showWeb3BrowserModal) {
            this.setState({ showModal: true });
        }
    }

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.showWeb3BrowserModal) {
            this.setState({ showModal: true });
        }
    }

    render() {
        const content = (
            <div>
                <span>
                    Dharma Plex is a web3-enabled application. You will need to use one of the below
                    web3-enabled browsers in order to properly interact with this site.
                </span>
                <ul>
                    <li>
                        <a href="https://www.toshi.org/" target="_blank">
                            Toshi
                        </a>
                    </li>
                    <li>
                        <a href="https://www.cipherbrowser.com/" target="_blank">
                            Cipher
                        </a>
                    </li>
                    <li>
                        <a href="https://trustwalletapp.com/" target="_blank">
                            Trust Wallet
                        </a>
                    </li>
                </ul>
            </div>
        );

        return (
            <div>
                <Modal isOpen={this.state.showModal}>
                    <ModalHeader>Your browser isn't web3 enabled</ModalHeader>
                    <ModalBody>{content}</ModalBody>
                </Modal>
            </div>
        );
    }
}

export { MobileModal };

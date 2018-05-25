import * as React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { A } from "../../components/StyledComponents";

interface Props {
    showWeb3BrowserModal: boolean;
}

interface State {
    showModal: boolean;
}

class MobileModal extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.toggle = this.toggle.bind(this);
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

    toggle() {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        const content = (
            <span>
                Dharma Plex is a web3-enabled application. You will need to use one of the below
                web3-enabled browsers in order to properly access this site.
                <ul>
                    <li>
                        <A href="https://www.toshi.org/" target="_blank">
                            Toshi
                        </A>
                    </li>
                    <li>
                        <A href="https://www.cipherbrowser.com/" target="_blank">
                            Cipher
                        </A>
                    </li>
                    <li>
                        <A href="https://trustwalletapp.com/" target="_blank">
                            Trust Wallet
                        </A>
                    </li>
                </ul>
            </span>
        );

        return (
            <div>
                <Modal isOpen={this.state.showModal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Your browser isn't web3 enabled</ModalHeader>
                    <ModalBody>{content}</ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>
                            OK
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export { MobileModal };

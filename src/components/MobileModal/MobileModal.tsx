import * as React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import {
    Web3BrowserIconWrapper,
    Web3BrowserIconWrapperLeft,
    Web3BrowserIcon,
} from "./styledComponents";

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
        const toshi = require("../../assets/img/toshi.png");
        const trustWallet = require("../../assets/img/trust_wallet.png");
        const metamask = require("../../assets/img/metamask.png");

        const content = (
            <div>
                <p>
                    Dharma Plex is a Web3-enabled application — that’s a fancy way of saying that it
                    needs to be plugged into the blockchain.
                </p>
                <p>
                    You’ll need to use one of the below Web3-enabled browsers in order to properly
                    interact with this site:
                </p>

                <h3>#desktop</h3>
                <div>
                    <Web3BrowserIconWrapperLeft>
                        <a href="https://www.metamask.org/" target="_blank">
                            <Web3BrowserIcon src={metamask} alt="metamask" />
                        </a>
                    </Web3BrowserIconWrapperLeft>
                </div>

                <h3>#mobile</h3>
                <div>
                    <Web3BrowserIconWrapperLeft>
                        <a href="https://www.toshi.org/" target="_blank">
                            <Web3BrowserIcon src={toshi} alt="Toshi" />
                        </a>
                    </Web3BrowserIconWrapperLeft>
                    <Web3BrowserIconWrapper>
                        <a href="https://trustwalletapp.com/" target="_blank">
                            <Web3BrowserIcon src={trustWallet} alt="Trust Wallet" />
                        </a>
                    </Web3BrowserIconWrapper>
                </div>
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

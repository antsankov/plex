import * as React from "react";
import { Web3BrowserIcon, Web3BrowserIcons, Web3BrowserIconWrapper } from "./styledComponents";
import { PlexModal } from "../PlexModal";

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

    componentWillReceiveProps(nextProps: Props) {
        if (nextProps.showWeb3BrowserModal) {
            this.setState({ showModal: true });
        }
    }

    isMobileDevice(): boolean {
        return (
            typeof window.orientation !== "undefined" ||
            navigator.userAgent.indexOf("IEMobile") !== -1
        );
    }

    render() {
        const toshi = require("../../assets/img/toshi.png");
        const trustWallet = require("../../assets/img/trust_wallet.png");
        const metamask = require("../../assets/img/metamask.png");
        const brave = require("../../assets/img/brave.png");

        const mobileBrowsers = (
            <div>
                <Web3BrowserIconWrapper>
                    <a href="https://www.toshi.org/" target="_blank">
                        <Web3BrowserIcon src={toshi} alt="Toshi" />
                    </a>
                </Web3BrowserIconWrapper>
                <Web3BrowserIconWrapper>
                    <a href="https://trustwalletapp.com/" target="_blank">
                        <Web3BrowserIcon src={trustWallet} alt="Trust Wallet" />
                    </a>
                </Web3BrowserIconWrapper>
            </div>
        );

        const desktopBrowers = (
            <div>
                <Web3BrowserIconWrapper>
                    <a href="https://metamask.io/" target="_blank">
                        <Web3BrowserIcon src={metamask} alt="MetaMask" />
                    </a>
                </Web3BrowserIconWrapper>
                <Web3BrowserIconWrapper>
                    <a href="https://brave.com/" target="_blank">
                        <Web3BrowserIcon src={brave} alt="Brave" />
                    </a>
                </Web3BrowserIconWrapper>
            </div>
        );

        const browserIcons = this.isMobileDevice() ? mobileBrowsers : desktopBrowers;

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
                <Web3BrowserIcons>{browserIcons}</Web3BrowserIcons>
            </div>
        );

        const title = "Your browser isn't Web3-enabled";
        const icon = "exclamation-triangle";

        return (
            <PlexModal showModal={this.state.showModal} title={title} icon={icon}>
                {content}
            </PlexModal>
        );
    }
}

export { MobileModal };

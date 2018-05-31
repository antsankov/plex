import * as React from "react";
import { Web3BrowserIcon, Web3BrowserIcons, Web3BrowserIconWrapper } from "./styledComponents";
import { PlexModal } from "../PlexModal";

interface Props {
    showWeb3BrowserModal: boolean;
}

interface State {
    showModal: boolean;
}

class Web3Modal extends React.Component<Props, State> {
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
        const toshi = require("../../assets/img/web3/toshi.png");
        const trustWallet = require("../../assets/img/web3/trust_wallet.png");
        const metamask = require("../../assets/img/web3/metamask.png");

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

        const desktopBrowsers = (
            <div>
                <Web3BrowserIconWrapper>
                    <a href="https://metamask.io/" target="_blank">
                        <Web3BrowserIcon src={metamask} alt="MetaMask" />
                    </a>
                </Web3BrowserIconWrapper>
            </div>
        );

        const mobilePreamble = (
            <div>
                In order to use Dharma Plex from your phone, you will need to access it from one of
                the below Web3 browsers available for download on the app store.
            </div>
        );

        const desktopPreamble = (
            <div>
                In order to use Dharma Plex on the web, you will need to install the MetaMask
                browser extension, available for Chrome, Firefox, Opera, and the new Brave browser.
            </div>
        );

        const browserIcons = this.isMobileDevice() ? mobileBrowsers : desktopBrowsers;

        const preamble = this.isMobileDevice() ? mobilePreamble : desktopPreamble;

        const content = (
            <div>
                <div>
                    Dharma Plex is a Web3-enabled application, which is just a fancy way of saying
                    that it needs to be plugged into the Ethereum blockchain.
                </div>
                <br />
                {preamble}
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

export { Web3Modal };

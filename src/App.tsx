import * as React from "react";
import * as Web3 from "web3";

import { PageLayout } from "./layouts";
import { MobileModal } from "./components/MobileModal";

const Intercom = require("react-intercom").default;
const promisify = require("tiny-promisify");

interface Props {
    web3: Web3;
    accounts: string[];
    showWeb3BrowserModal: boolean;
}

interface State {
    intervalId: any;
}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            intervalId: undefined,
        };
    }

    componentDidMount() {
        const intervalId = setInterval(
            () => this.checkAccount(this.props.web3, this.props.accounts),
            1000,
        );
        this.setState({ intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    async checkAccount(web3: Web3, accounts: string[]) {
        if (!web3 || !accounts) {
            return;
        }
        const latestAccounts = await promisify(web3.eth.getAccounts)();
        if (latestAccounts.length && accounts.length && latestAccounts[0] !== accounts[0]) {
            localStorage.clear();
            window.location.reload();
        }
    }

    render() {
        return (
            <PageLayout>
                {this.props.children}
                <Intercom appID={"ll37s9fu"} />
                <MobileModal showWeb3BrowserModal={this.props.showWeb3BrowserModal} />
            </PageLayout>
        );
    }
}

export { App };

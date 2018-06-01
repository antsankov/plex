import { connect } from "react-redux";
import { App } from "./App";

const mapStateToProps = (state: any) => {
    return {
        web3: state.web3Reducer.web3,
        accounts: state.web3Reducer.accounts,
        showWeb3BrowserModal: state.web3Reducer.showWeb3BrowserModal,
    };
};

export const AppContainer = connect(mapStateToProps)(App);

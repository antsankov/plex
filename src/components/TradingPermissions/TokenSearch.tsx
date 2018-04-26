// External Libraries
import * as React from "react";
import * as Web3 from "web3";
import * as _ from "lodash";
import Dharma from "@dharmaprotocol/dharma.js";

// Models
import { TokenEntity } from "../../models";

// Styled Components
import { TokenSearchResults } from "./styledComponents";

import { TokenSearchResult } from "./TokenSearchResult";
import Icon from "../Icon/Icon";

interface Props {
    tokens: TokenEntity[];
    web3: Web3;
    dharma: Dharma;
    setError: (errorMessage: string) => void;
    handleFaucetRequest: (tokenAddress: string, userAddress: string, dharma: Dharma) => void;
    agreeToTerms: boolean;
    updateProxyAllowanceAsync: (tradingPermitted: boolean, tokenAddress: string) => void;
}

interface State {
    query: string;
    results: TokenEntity[];
}

/**
 * The maximum number of search results to display.
 *
 * @type {number}
 */
const MAX_RESULTS = 4;

/**
 * When no query is present, we show the most popular tokens.
 *
 * @type {string[]}
 */
const DEFAULT_RESULTS = ["REP", "WETH", "MKR", "ZRX"];

export default class TokenSearch extends React.Component<Readonly<Props>, State> {
    state = {
        query: "",
        results: [],
    };

    private search: HTMLInputElement;

    constructor(props: Readonly<Props>) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.setState({ results: this.getDefaultResults() });
    }

    getDefaultResults() {
        const { tokens } = this.props;

        return _.filter(
            tokens,
            (token) => _.includes(DEFAULT_RESULTS, token.symbol),
        );
    }

    filterTokens(tokens: TokenEntity[]): TokenEntity[] {
        const { query } = this.state;

        if (query === "") {
            // No query has been made.
            return this.getDefaultResults();
        }

        // Filter the given tokens by the user's input.
        const results = _.filter(tokens, (token) => {
            const { name, symbol } = token;
            const term = _.lowerCase(symbol + name);

            return _.includes(term, query);
        });

        // Limit the number of results to return.
        return _.take(results, MAX_RESULTS);
    }

    handleInputChange() {
        this.setState({ query: this.search.value });
    }

    render() {
        const {
            handleFaucetRequest,
            setError,
            dharma,
            web3,
            agreeToTerms,
            updateProxyAllowanceAsync,
            tokens
        } = this.props;

        const results = this.filterTokens(tokens);

        return (
            <div>
                <form>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Icon
                            icon="search"
                            color="#ffffff"
                            height="28px"
                            opacity={0.5}
                        />

                        <input
                            placeholder="Search tokens..."
                            ref={(input: HTMLInputElement) => this.search = input}
                            onChange={this.handleInputChange}
                            style={{
                                border: 0,
                                outline: 0,
                                backgroundColor: "#082c30",
                                color: "#ffffff",
                                opacity: 0.5,
                                marginBottom: "5px",
                            }}
                        />
                    </div>
                </form>

                <TokenSearchResults>
                    {
                        results.map((token, index) => {
                            return <TokenSearchResult
                                key={index}
                                token={token}
                                web3={web3}
                                dharma={dharma}
                                setError={setError}
                                handleFaucetRequest={handleFaucetRequest}
                                agreeToTerms={agreeToTerms}
                                updateProxyAllowanceAsync={updateProxyAllowanceAsync}
                            />;
                        })
                    }
                </TokenSearchResults>
            </div>
        );
    }
}

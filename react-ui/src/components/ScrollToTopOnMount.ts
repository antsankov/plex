import * as React from "react";

class ScrollToTopOnMount extends React.Component<{}, {}> {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return null;
    }
}

export { ScrollToTopOnMount };
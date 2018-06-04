import * as React from "react";

export interface Props {
    // A function that gets invoked when the user agrees to enter the app.
    handleEnterApp: () => void;
}

export default class SplashPage extends React.Component<Props, {}> {
    render() {
        const { handleEnterApp } = this.props;

        return (
            <div>
                <div>This is the splash page yo!</div>
                <a href="#" onClick={handleEnterApp}>Enter app</a>
            </div>
        );
    }
}
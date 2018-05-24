export namespace Analytics {
    export enum RequestLoanAction {
        ViewForm = "View Form",
        BeginForm = "Begin Form",
        SubmitForm = "Submit Form",
        ConfirmRequest = "Confirm Request",
        ViewConfirmation = "View Confirmation",
    }

    // The union of all Action enums
    type Action = RequestLoanAction;

    export enum Category {
        RequestLoan = "Request Loan",
    }

    /*
     * If nonInteraction === 1, Google Analytics will not consider the action to be an interaction.
     * This means that if a user visits a page, only does nonInteraction actions, then leaves,
     * Google Analytics will consider the visit a "bounce."
     */
    export interface TrackProperties {
        category: Category;
        nonInteraction?: number;
    }

    export function page(pageName: string, properties?: object) {
        if (shouldSendAnalytics()) {
            (window as any).analytics.page(pageName, properties);
        }
    }

    export function track(action: Action, properties?: TrackProperties) {
        if (shouldSendAnalytics()) {
            (window as any).analytics.track(action, properties);
        }
    }

    function shouldSendAnalytics() {
        return process.env.NODE_ENV === "production";
    }
}

import { actionsEnums } from "../common/actionsEnums";

class PlexReducerState {
    agreeToTerms: boolean;
    walkthroughCompleted: boolean;

    constructor() {
        this.agreeToTerms = false;
        this.walkthroughCompleted = false;
    }
}

const handleAgreeToTerms = (state: PlexReducerState, action: any) => {
    return {
        ...state,
        agreeToTerms: action.payload,
    };
};

const handleFinishWalkthrough = (state: PlexReducerState) => {
    return {
        ...state,
        walkthroughCompleted: true,
    };
};

export const plexReducer = (state: PlexReducerState = new PlexReducerState(), action: any) => {
    switch (action.type) {
        case actionsEnums.AGREE_TO_TERMS:
            return handleAgreeToTerms(state, action);
        case actionsEnums.FINISH_WALKTHROUGH:
            return handleFinishWalkthrough(state);
        default:
            return state;
    }
};

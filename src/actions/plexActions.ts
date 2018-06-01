import { actionsEnums } from "../common/actionsEnums";

export const agreeToTerms = (agree: boolean) => {
    return {
        type: actionsEnums.AGREE_TO_TERMS,
        payload: agree,
    };
};

export const finishWalkthrough = () => {
    return {
        type: actionsEnums.FINISH_WALKTHROUGH,
    };
};

export const detectMobileBrowser = (isMobileBrowser: boolean) => {
    return {
        type: actionsEnums.DETECT_MOBILE_BROWSER,
        isMobileBrowser,
    };
};

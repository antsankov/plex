import { actionsEnums } from "../common/actionsEnums";

export const finishWalkthrough = () => {
    return {
        type: actionsEnums.FINISH_WALKTHROUGH,
    };
};

import { connect } from "react-redux";
import { EnsureAgreedToTerms } from "./EnsureAgreedToTerms";
import { agreeToTerms } from "../../actions";

const mapStateToProps = (state: any) => {
    return {
        agreeToTerms: state.plexReducer.agreeToTerms,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        handleAgreeToTerms: (agree: boolean) => dispatch(agreeToTerms(agree)),
    };
};

export const EnsureAgreedToTermsContainer = connect(mapStateToProps, mapDispatchToProps)(
    EnsureAgreedToTerms,
);

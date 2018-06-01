import * as AWS from "aws-sdk";
import { Types } from "@dharmaprotocol/dharma.js";

import {
    AWS_IMAGE_GENERATOR_LAMBDA_ACCESS_KEY_ID,
    AWS_IMAGE_GENERATOR_LAMBDA_SECRET_ACCESS_KEY,
} from "../common/constants";

export interface LoanDescriptionImageParameters {
    amortizationUnit: string;
    collateralTokenAmount: Types.TokenAmount;
    gracePeriodInDays: number;
    interestRate: number;
    issuanceHash: string;
    principalTokenAmount: Types.TokenAmount;
    termLength: number;
}

export const generateLoanDescriptionImage = (parameters: LoanDescriptionImageParameters) => {
    if (process.env.NODE_ENV !== "production") {
        return;
    }

    // Parse parameters
    const lambdaPayload = {
        amortizationUnit: parameters.amortizationUnit,
        collateralAmount: parameters.collateralTokenAmount.decimalAmount.toNumber(),
        collateralTokenSymbol: parameters.collateralTokenAmount.tokenSymbol,
        gracePeriod: parameters.gracePeriodInDays,
        interestRate: parameters.interestRate,
        issuanceHash: parameters.issuanceHash,
        principalAmount: parameters.principalTokenAmount.decimalAmount.toNumber(),
        principalTokenSymbol: parameters.principalTokenAmount.tokenSymbol,
        termLength: parameters.termLength,
    };

    // Invoke Lambda event
    const lambda = new AWS.Lambda({
        accessKeyId: AWS_IMAGE_GENERATOR_LAMBDA_ACCESS_KEY_ID,
        secretAccessKey: AWS_IMAGE_GENERATOR_LAMBDA_SECRET_ACCESS_KEY,
        region: "us-east-1",
    });

    const lambdaParameters = {
        FunctionName: "loanDescriptionImageGenerator",
        InvocationType: "Event",
        LogType: "None",
        Payload: JSON.stringify(lambdaPayload),
    };

    lambda.invoke(lambdaParameters, (error, data) => {
        if (error) {
            throw error;
        }
    });
};

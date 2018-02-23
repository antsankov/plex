import { JSONSchema4 } from 'json-schema';

export const schema: JSONSchema4 = {
	type: 'object',
	definitions: {
		tokens: {
			type: 'string',
			title: 'Token',
			enum: [
				'REP',
				'MKR',
				'ZRX'
			],
			enumNames: [
				'Augur (REP)',
				'Maker DAO (MKR)',
				'0x Token (ZRX)'
			]
		}
	},
	properties: {
		loan: {
			type: 'object',
			title: 'How much do you want?',
			required: [
				'principalAmount',
				'principalTokenSymbol'
			],
			properties: {
				principalAmount: {
					type: 'number',
					title: 'Amount',
				},
				principalTokenSymbol: {
					'$ref': '#/definitions/tokens'
				},
				description: {
					type: 'string',
				}
			}
		},
		collateral: {
			type: 'object',
			title: 'Do you want it collateralized?',
			properties: {
				collateralized: {
					type: 'boolean',
					title: 'Collateralized',
					description: 'A quick, layman\'s definition of what collateralized means and why it\'s a smart idea goes here.'
				}
			},
			dependencies: {
				collateralized: {
					properties: {
						collateralSource: {
							title: 'Collateral',
							'$ref': '#/definitions/tokens'
						},
						collateralAmount: {
							type: 'number',
						},
						collateralTokenSymbol: {
							'$ref': '#/definitions/tokens'
						}
					}
				}
			}
		},
		terms: {
			type: 'object',
			title: 'What terms would you like?',
			description: 'The most commonly chosen options are selected by default.',
			required: [
				'interestRate',
				'amortizationUnit',
				'termLength'
			],
			properties: {
				interestRate: {
					type: 'number',
					title: 'Interest Rate'
				},
				amortizationUnit: {
					type: 'string',
					title: 'Installments Type',
					enum: [
						'hours',
						'days',
						'weeks',
						'months',
						'years'
					],
					enumNames: [
						'Hourly',
						'Daily',
						'Weekly',
						'Monthly',
						'Yearly'
					]
				},
				termLength: {
					type: 'number',
					title: 'Term Length',
					description: 'Enter the length of the entire debt agreement, in units of the chosen installments (e.g. a term length of 2 with an installment type of "monthly" would be equivalent to a 2 month long loan)'
				}
			}
		}
	}
};

export const uiSchema = {
	loan: {
		principalAmount: {
			'ui:autofocus': true,
			'ui:placeholder': '100.3',
			classNames: 'inline-field width75'
		},
		principalTokenSymbol: {
			'ui:placeholder': 'select',
			'ui:options': {
				label: false
			},
			classNames: 'inline-field width25 padding-top'
		},
		description: {
			'ui:placeholder': 'Description (optional, but helpful to lenders)',
			'ui:options': {
				label: false
			},
			classNames: 'group-field'
		}
	},
	collateral: {
		collateralized: {
			'ui:disabled': true,
			classNames: 'group-field'
		},
		collateralSource: {
			'ui:placeholder': 'Select your source of collateral',
			classNames: 'group-field'
		},
		collateralAmount: {
			'ui:placeholder': 'Amount of collateral',
			'ui:options': {
				label: false
			},
			classNames: 'inline-field width75'
		},
		collateralTokenSymbol: {
			'ui:placeholder': 'select',
			'ui:options': {
				label: false
			},
			classNames: 'inline-field width25'
		}
	},
	terms: {
		interestRate: {
			'ui:placeholder': '8.12%',
			classNames: 'group-field'
		},
		amortizationUnit: {
			'ui:placeholder': 'select',
			classNames: 'group-field'
		},
		termLength: {
			'ui:placeholder': '3',
			classNames: 'group-field'
		}
	}
};

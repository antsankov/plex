import * as React from 'react';
import { Header, MainWrapper, JSONSchemaForm } from '../../../components';
import { schema, uiSchema } from './schema';
import { PaperLayout } from '../../../layouts';
import {
	Instructions,
	Title,
	StyledLink
} from './styledComponents';
import { encodeUrlParams } from '../../../utils';
import { browserHistory } from 'react-router';

interface State {
	formData: any;
}

class FillLoanEmpty extends React.Component<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = {
			formData: {}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(formData: any) {
		this.setState({ formData });
	}

	handleSubmit() {
		let loanRequest = this.state.formData.loan.loanRequest;
		if (!loanRequest) {
			return;
		}
		loanRequest = JSON.parse(loanRequest);
		browserHistory.push(`/fill/loan?${encodeUrlParams(loanRequest)}`);
	}

	render() {
		const descriptionContent = <span>Here's a quick description of what a loan is and why you should fill one.</span>;
		return (
			<PaperLayout>
				<MainWrapper>
					<Header title={'Fill a loan'} description={descriptionContent} />
					<JSONSchemaForm
						schema={schema}
						uiSchema={uiSchema}
						formData={this.state.formData}
						buttonText="Next &#8594;"
						onHandleChange={this.handleChange}
						onHandleSubmit={this.handleSubmit}
					/>
					<Instructions>
						<Title>Just getting started?</Title>
						<StyledLink to="#" >FILLING DEBT ORDERS (VIDEO)</StyledLink>
						<StyledLink to="/chat" >JOIN THE DHARMA CHAT</StyledLink>
					</Instructions>
				</MainWrapper>
			</PaperLayout>
		);
	}
}

export { FillLoanEmpty };

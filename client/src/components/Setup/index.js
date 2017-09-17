import React, { Component } from 'react';
import _ from 'lodash'

import RangeInput from './RangeInput'
import Dropdown from './Dropdown'

export default class Setup extends Component {

	renderControls() {
		return _.map(this.props.fears.options, (obj, i) => {
			if (obj.type === 'range') {
				return <RangeInput key={i} {...obj} />
			}
			else if (obj.type === 'select') {
				return <Dropdown key={i} {...obj} />
			}
			return null
		})
	}

	render() {
			return (
				<div>
					<form>
 						{this.renderControls()}
					</form>
				</div>
			);
	}
}

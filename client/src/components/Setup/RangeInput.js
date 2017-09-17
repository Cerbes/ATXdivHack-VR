import React, { Component } from 'react'

export default class RangeInput extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: props.default
		}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({ value: e.target.value })
	}

	render() {
		return (
			<div>
				<h1>{`${this.props.setting}: ${this.state.value}`}</h1>
				<input
					type="range"
					min={this.props.lower}
					max={this.props.upper}
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</div>
		)
	}
}

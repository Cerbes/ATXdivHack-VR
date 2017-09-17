import React, { Component } from 'react'

export default class Dropwodn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.choices[0]
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  renderOptions() {
    return this.props.choices.map(choice => {
      return (
        <option key={choice} value={choice}>
          {choice}
        </option>
      )
    })
  }

	render() {
		return (
			<div>
				<h1>{`${this.props.setting}: ${this.state.value}`}</h1>
        <select name={this.props.setting} onChange={this.handleChange}>
          {this.renderOptions()}
        </select>
			</div>
		)
	}
}

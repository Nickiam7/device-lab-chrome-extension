import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { firestoreConnect } from 'react-redux-firebase'
import moment from 'moment'

class AddSite extends Component {
		
	state = {
		url: '',
		baseUrl: '',
		title: '',
		createdAt: moment().format('YYYY-MM-DDTHH:mm:ss'),
		addTitle: false,
	}

	onChange = (e) => this.setState({ [e.target.name]: e.target.value })
	onSubmit = (e) => {
		e.preventDefault()
		const newSite = this.state
		const { firestore } = this.props
		firestore.add({collection: 'sites'}, newSite).then(() => console.log('Success'))
		const navbarBrand = document.querySelector('.navbar-brand')
		const messageDiv = document.createElement('div')
		messageDiv.setAttribute('style', 'color: #46b450; float: right;')
		const message = document.createElement('span')
		message.innerHTML = '<i class="fas fa-check-circle"></i> Success'
		messageDiv.appendChild(message)
		navbarBrand.appendChild(messageDiv)
		const urlInput = document.querySelector('#url')
		urlInput.value = ''
		setTimeout(() => {
			messageDiv.textContent = ''
		}, 2000)
	}

	onClickShowTitle = (e) => {
		this.setState({addTitle: !this.state.addTitle})
	}

	render() {
		const { addTitle } = this.state
		return(
			<div>
				<div className="row">
					<div className="col">			
						<form 
							onSubmit={this.onSubmit}
							autoComplete="off"
							>
							<div className="input-group mb-3">
								<input 
									type="url"
									className="form-control d-block"
									name="url" 
									required 
									onChange={this.onChange} 
									value={this.state.url}
									id="url"
								/>	
								<input 
									type="text"										
									name="createdAt"
									required
									hidden
									defaultValue={this.state.createdAt}
								/>										
								<div className="input-group-append">
									<button
										type="submit"
										value="Add Site"
										className="btn btn-primary">
										<i className="fas fa-plus"></i> Add Site
									</button>
								</div>								
							</div>
						</form>		
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div 
							onClick={() => this.onClickShowTitle()}
							className="addTitle">
							Add Title <i className={addTitle ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
						</div>
					</div>
				</div>
				{addTitle ? (
				<div className="row">
					<div className="col">					  
				    <div style={titleContainer}>
				      <input 
				      	type="text"
				      	className="form-control d-block"
								autoComplete="off"
				      	name="title"
				      	placeholder="CNU Home Page"
				      	onChange={this.onChange}
				      	value={this.state.title}
				      />	
				    </div>
					</div>
				</div>) : null}
			</div>
		)
	}
}

const titleContainer = {
	marginBottom: '25px'
}

AddSite.propTypes = {
	firestore: PropTypes.object.isRequired
}

export default firestoreConnect()(AddSite)
import React, { Component } from 'react'

import Logo from '../../device_lab_logo.png'

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand mb-4 navbar-light bg-light border-bottom">
				<div className="container">
					<div className="navbar-brand">
						<img src={Logo} alt="Device Lab" style={logoStyle}/> Device Lab
					</div>								
				</div>
			</nav>
		)
	}
}

const logoStyle = {
	width: '100%',
	maxWidth: '32px'
}

export default Navbar
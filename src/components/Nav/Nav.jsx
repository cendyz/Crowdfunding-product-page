import './nav.scss'
import { v4 as uuidv4 } from 'uuid'
import { navData } from '../../data'

import logo from '../../images/logo.svg'
import hamburgerIcon from '../../images/icon-hamburger.svg'
import { useState } from 'react'

const Nav = () => {
	const [menu, setMenu] = useState(false)

	return (
		<nav className='nav wrapper'>
			<img src={logo} alt='Company logo crowdfund' className='nav-logo' />
			<button
				className='nav-mobile-hamburger'
				onClick={() => setMenu(!menu)}>
				<img
					src={hamburgerIcon}
					alt='Menu icon'
					className='nav-mobile-hamburger-icon'
				/>
			</button>

			<div
				className={menu ? 'nav-mobile-menu display' : 'nav-mobile-menu'}>
				{navData.map(({ name }) => {
					const id = uuidv4()
					return (
						<a
							href='#'
							className='nav-mobile-menu-link'
							key={id}
							onClick={() => setMenu(!menu)}>
							{name}
						</a>
					)
				})}
			</div>
			<div className='nav-desktop-links'>
				{navData.map(({ name }) => {
					const id = uuidv4()
					return (
						<a href='#' className='nav-desktop-link' key={id}>
							{name}
						</a>
					)
				})}
			</div>
		</nav>
	)
}
export default Nav

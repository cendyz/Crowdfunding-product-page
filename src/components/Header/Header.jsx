import './header.scss'

import mobileHeader from '../../images/image-hero-mobile.jpg'
import mobileDesktop from '../../images/image-hero-desktop.jpg'

const Header = () => {
	return (
		<header className='header'>
			<picture>
				<source
					srcSet={mobileDesktop}
					media='(min-width: 992px)'
				/>
				<img
					src={mobileHeader}
					alt='Macbook on the desk'
					className='header-img'
				/>
			</picture>
			<div className='header-shadow'></div>
		</header>
	)
}
export default Header

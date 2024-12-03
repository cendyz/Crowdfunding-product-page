import './firstBox.scss'

import logo from '../../../images/logo-mastercraft.svg'
import bookmark from '../../../images/icon-bookmark-default.svg'

const FirstBox = () => {
	return (
		<div className='first-box'>
			<img src={logo} alt='M letter' className='first-logo' />
			<div className='first-box-content'>
				<h1 className='first-title'>Mastercraft Bamboo Monitor Riser</h1>
				<p className='first-text'>
					A beautiful & handcrafted monitor stand to reduce neck and eye
					strain.
				</p>
				<div className='btns'>
					<button className='first-btn'>Back this project</button>
					<button className='first-save'>
						<img
							src={bookmark}
							alt='Bookmark icon'
							className='main-save-img'
						/>
						<span className='bookmark-span'>Bookmark</span>
					</button>
				</div>
			</div>
		</div>
	)
}
export default FirstBox

import './firstBox.scss'
import logo from '../../../images/logo-mastercraft.svg'
import bookmark from '../../../images/icon-bookmark-default.svg'
import clicked from '../../../images/icon-bookmark-clicked.svg'

const FirstBox = ({activeBookmark}) => {

	const check = () => {
		console.log(activeBookmark);
		
	}
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
					<button className='first-btn' onClick={check}>Back this project</button>
					<button className={activeBookmark ? 'first-save clicked' : 'first-save'}>
						<img
							src={activeBookmark ? clicked : bookmark}
							alt='Bookmark icon'
							className='main-save-img'
						/>
						<span
							className={
								activeBookmark ? 'bookmark-span clicked' : 'bookmark-span'
							}>
							Bookmark
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}
export default FirstBox

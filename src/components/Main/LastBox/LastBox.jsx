import './lastBox.scss'
import { v4 as uuidv4 } from 'uuid'
import { lastData } from '../../../data'
import { useState } from 'react'
import ModalSelect from '../Modals/ModalSelect'
import Shadow from '../../Shadow/Shadow'

const LastBox = () => {
	const [isEnabled, setIsEnabled] = useState(false)

	return (
		<div className='last-box'>
			<h2 className='last-box-title'>About this project</h2>
			<p className='last-box-text'>
				The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
				platform that elevates your screen to a more comfortable viewing
				height. Placing your monitor at eye level has the potential to
				improve your posture and make you more comfortable while at work,
				helping you stay focused on the task at hand.
			</p>
			<p className='last-box-text'>
				Featuring artisan craftsmanship, the simplicity of design creates
				extra desk space below your computer to allow notepads, pens, and
				USB sticks to be stored under the stand.
			</p>
			{lastData.map(({ title, pledge, text, price, stock }) => {
				const id = uuidv4()
				return (
					<div className='last-box-inner' key={id}>
						<div className='last-box-up-wrapper'>
							<h3 className='last-box-inner-title'>{title}</h3>
							<p className='last-box-inner-pledge'>
								Pledge ${pledge} or more
							</p>
						</div>
						<p className='last-box-inner-text'>{text}</p>
						<div className='last-box-down-wrapper'>
							<div className='last-box-inner-left'>
								<p className='last-box-inner-left-price'>{price}</p>
								<p className='last-box-inner-left-text'>left</p>
							</div>
							<button
								className='last-box-inner-left-btn'
								onClick={() => setIsEnabled(!isEnabled)}>
								{stock || 'Select Reward'}
							</button>
						</div>
					</div>
				)
			})}
			{isEnabled && (
				<ModalSelect isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
			)}
			{isEnabled && (
				<Shadow isEnabled={isEnabled}/>
			)}
		</div>
	)
}
export default LastBox

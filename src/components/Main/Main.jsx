import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { secondData, lastData, modalSelectData } from '../../data'
import './main.scss'

const Main = () => {
	const [activeBookmark, setActiveBookmark] = useState(false)
	const [isEnabled, setIsEnabled] = useState(false)
	const [checkComplete, setCheckComplete] = useState(false)

	return (
		<main className='main'>
			<FirstBox
				activeBookmark={activeBookmark}
				setIsEnabled={setIsEnabled}
				setCheckComplete={setCheckComplete}
			/>
			<SecondBox />
			<LastBox isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
			<ModalSelect
				isEnabled={isEnabled}
				setIsEnabled={setIsEnabled}
				setActiveBookmark={setActiveBookmark}
			/>
			<Complete
				checkComplete={checkComplete}
				setActiveBookmark={setActiveBookmark}
				setIsEnabled={setIsEnabled}
				setCheckComplete={setCheckComplete}
			/>
			<Shadow isEnabled={isEnabled} checkComplete={checkComplete} />
		</main>
	)
}
export default Main

const Shadow = ({ isEnabled, checkComplete }) => {
	return (
		<div className={isEnabled || checkComplete ? 'shadow' : 'none'}></div>
	)
}

import logo from '../../images/logo-mastercraft.svg'
import bookmark from '../../images/icon-bookmark.svg'

const FirstBox = ({ activeBookmark, setIsEnabled, setCheckComplete }) => {
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
					<button className='first-btn' onClick={() => setIsEnabled(true)}>
						Back this project
					</button>
					<button
						className={
							activeBookmark ? 'first-save clicked' : 'first-save'
						}
						onClick={() => setCheckComplete(true)}>
						<img
							src={bookmark}
							alt='Bookmark icon'
							className='main-save-img'
						/>
						<span
							className={
								activeBookmark ? 'bookmark-span clicked' : 'bookmark-span'
							}>
							Bookmark
						</span>
						<span
							className={activeBookmark ? 'none' : 'shadow-span'}></span>
					</button>
				</div>
			</div>
		</div>
	)
}

const LastBox = ({ isEnabled, setIsEnabled }) => {
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
		</div>
	)
}

import closeImg from '../../images/icon-close-modal.svg'

const ModalSelect = ({ isEnabled, setIsEnabled, setActiveBookmark }) => {
	const firstTimeData = {
		zero: 0,
		one: 25,
		two: 75,
		three: 200,
	}

	const [checkFocus, setCheckFocus] = useState(null)
	const [check, setCheck] = useState(null)
	const [checkValue, setCheckValue] = useState(null)
	const [pledgePrice, setPledgePrice] = useState(firstTimeData)

	const handleCheck = id => {
		setCheck(prevId => (prevId === id ? null : id))
		setPledgePrice(firstTimeData)
		setCheckValue(null)
	}

	const handleChange = e => {
		const { name, value } = e.target

		if (/^\d*$/.test(value)) {
			setPledgePrice({ ...pledgePrice, [name]: value })
		}
	}
	const handleFocus = id => {
		setCheckFocus(id)
	}
	const handleBlur = () => {
		setCheckFocus(null)
	}

	const handleButton = inputId => {
		const minimumPledge =
			modalSelectData.find(item => item.inputId === inputId)?.pledge || 0
		if (pledgePrice[inputId] < minimumPledge) {
			setCheckValue(inputId)
		} else {
			setIsEnabled(false)
			setCheckValue(null)
		}

		setActiveBookmark(true)
	}

	return (
		<div className={isEnabled ? 'modal-select' : 'none'}>
			<div className='modal-select-up-box'>
				<h2 className='modal-select-box-title'>Back this project</h2>
				<img
					src={closeImg}
					alt='X icon'
					className='modal-select-up-box-x'
					onClick={() => setIsEnabled(!isEnabled)}
				/>
			</div>
			<p className='modal-select-box-text'>
				Want to support us in bringing Mastercraft Bamboo Monitor Riser out
				in the world?
			</p>
			{modalSelectData.map(({ inputId, title, pledge, amount, text }) => {
				return (
					<div
						className={
							check === inputId
								? 'modal-select-box-inner green-box'
								: 'modal-select-box-inner'
						}
						key={inputId}>
						<div className='modal-up-wrapper'>
							<div className='box'>
								<div className='input-box'>
									<input
										type='radio'
										name='pledge'
										id={inputId}
										checked={check === inputId}
										onChange={() => handleCheck(inputId)}
										className='modal-select-top-input'
									/>
								</div>
								<div className='modal-text-up'>
									<label htmlFor={inputId} className='modal-select-label'>
										<span className='pledge-span'>{title}</span>
										<span className='modal-select-label-span'>
											Pledge ${pledge || ''} or more
										</span>
									</label>
								</div>
							</div>

							<p className='modal-box-inner-text-desktop'>{text}</p>

							<div className='modal-box-inner-left-desktop'>
								<p className='modal-box-inner-left-price-desktop'>
									{amount || '0'}
								</p>
								<p className='modal-box-inner-left-text-desktop'>left</p>
							</div>
						</div>
						<div
							className={
								check === inputId ? 'modal-bottom-wrapper' : 'none'
							}>
							<label className='modal-bottom-label'>
								Enter your pledge
							</label>
							<div className='modal-bottom-right'>
								<div
									className={
										checkFocus === inputId
											? 'input-box2 input-box2-border'
											: checkValue === inputId
											? 'input-box2 warning'
											: 'input-box2'
									}>
									<span className='input-dollar'>$</span>
									<input
										type='text'
										className='modal-bottom-input'
										value={pledgePrice[inputId]}
										name={inputId}
										onChange={handleChange}
										onFocus={() => handleFocus(inputId)}
										onBlur={handleBlur}
									/>
								</div>
								<button
									className='modal-bottom-continue'
									onClick={() => handleButton(inputId)}>
									Continue
								</button>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

const SecondBox = () => {
	return (
		<div className='second-box'>
			<div className='second-box-wrapper'>
				{secondData.map(({ price, text }) => {
					const id = uuidv4()
					return (
						<div className='second-box-content' key={id}>
							<p className='second-box-content-price'>{price}</p>
							<p className='second-box-content-text'>{text}</p>
							<div className='second-box-content-line'></div>
						</div>
					)
				})}
			</div>
			<div className='second-box-line'></div>
		</div>
	)
}

import checkIcon from '../../images/icon-check.svg'

const Complete = ({
	checkComplete,
	setIsEnabled,
	setActiveBookmark,
	setCheckComplete,
}) => {
	const handleReset = () => {
		setIsEnabled(false)
		setActiveBookmark(false)
		setCheckComplete(false)
	}
	return (
		<div className={checkComplete ? 'complete' : 'complete none'}>
			<img src={checkIcon} alt='Check icon' className='complete-img' />
			<h3 className='complete-title'>Thanks for your support</h3>
			<p className='complete-text'>
				Your pledge brings us one step closer to sharin Mastercraft Bamboo
				Monitor Riser worldwide. You will get an email once our campaing is
				completed.
			</p>
			<button className='complete-btn' onClick={handleReset}>
				Got it!
			</button>
		</div>
	)
}

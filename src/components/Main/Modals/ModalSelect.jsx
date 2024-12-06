import closeImg from '../../../images/icon-close-modal.svg'
import './modalSelect.scss'
import { modalSelectData } from '../../../data'
import { useState } from 'react'

const ModalSelect = () => {
	const firstTimeData = {
		zero: 0,
		one: 25,
		two: 75,
		three: 200,
	}

	const [check, setCheck] = useState(null)
	const [checkFocus, setCheckFocus] = useState(null)
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
			setCheckValue(null)
		}
	}

	return (
		<div className='modal-select'>
			<div className='modal-select-up-box'>
				<h2 className='modal-select-box-title'>Back this project</h2>
				<img
					src={closeImg}
					alt='X icon'
					className='modal-select-up-box-x'
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
										{title}
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
export default ModalSelect

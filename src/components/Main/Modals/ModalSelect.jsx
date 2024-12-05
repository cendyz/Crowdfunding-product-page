import closeImg from '../../../images/icon-close-modal.svg'
import './modalSelect.scss'
import { modalSelectData } from '../../../data'
import { useState } from 'react'

const ModalSelect = () => {
	const [check, setCheck] = useState(null)
	const [activeInput, setActiveInput] = useState(null)
	const handleFocus = id => setActiveInput(id)
	const handleBlur = () => setActiveInput(null)

	const handleRadio = id => {
		setCheck(checking => (checking === id ? null : id))
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
										onChange={() => handleRadio(inputId)}
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
										activeInput === inputId
											? 'input-box2 input-box2-border'
											: 'input-box2'
									}>
									<span className='input-dollar'>$</span>
									<input
										type='text'
										className='modal-bottom-input'
										placeholder={amount || ''}
										onFocus={() => handleFocus(inputId)}
										onBlur={handleBlur}
									/>
								</div>
								<button className='modal-bottom-continue'>Continue</button>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}
export default ModalSelect

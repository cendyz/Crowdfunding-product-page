import { FirstBox, SecondBox, LastBox } from './index'

const Main = () => {
	return (
		<main className='main'>
			<FirstBox />
			<SecondBox />
			<LastBox />
			<div className='modal'>
				<div className='modal-up-box'>
					<h2 className='modal-box-title'>Back this project</h2>
					<img
						src='src/images/icon-close-modal.svg'
						alt='X icon'
						className='modal-up-box-x'
					/>
				</div>
				<p className='modal-box-text'>
					Want to support us in bringing Mastercraft Bamboo Monitor Riser
					out in the world?
				</p>
				<div className='modal-box-inner-desktop'>
					<div className='modal-up-wrapper'>
						<div className='input-box'>
							<input
								type='radio'
								name='pledge'
								id='zero'
								className='modal-input-desktop'
							/>
						</div>
						<div className='modal-select-desktop'>
							<div className='modal-text-up'>
								<label
									htmlFor='zero'
									className='modal-select-label-desktop'>
									Pledge with no reward
									<span className='modal-select-label-span-desktop'>
										Pledge $25 or more
									</span>
								</label>
								<div className='modal-box-inner-left-desktop'>
									<p className='modal-box-inner-left-price-desktop'>64</p>
									<p className='modal-box-inner-left-text-desktop'>left</p>
								</div>
							</div>
							<p className='modal-box-inner-text-desktop'>
								Choose to support us without a reward if you simply believe
								in our project. As a backer, you will be signed up to
								receive product updates via email.
							</p>
						</div>
					</div>
					<div className='modal-bottom-wrapper'>
						<label htmlFor='price' className='modal-bottom-label'>
							Enter your pledge
						</label>
						<div className='modal-bottom-right'>
							<input
								type='text'
								id='price'
								className='modal-bottom-input'
								placeholder='25'
							/>
							<button className='modal-bottom-continue'>Continue</button>
						</div>
					</div>
				</div>
				<div className='modal-box-inner-desktop'>
					<div className='modal-up-wrapper'>
						<div className='input-box'>
							<div className='input-box'>
								<input
									type='radio'
									name='pledge'
									id='one'
									className='modal-input-desktop'
								/>
							</div>
						</div>
						<div className='modal-select-desktop'>
							<div className='modal-text-up'>
								<label
									htmlFor='one'
									className='modal-select-label-desktop'>
									Bamboo Stand
									<span className='modal-select-label-span-desktop'>
										Pledge $25 or more
									</span>
								</label>
								<div className='modal-box-inner-left-desktop'>
									<p className='modal-box-inner-left-price-desktop'>101</p>
									<p className='modal-box-inner-left-text-desktop'>left</p>
								</div>
							</div>
							<p className='modal-box-inner-text-desktop'>
								You get an ergonomic stand made of natural bamboo. You've
								helped us launch our promotional campaign, and you’ll be
								added to a special Backer member list.
							</p>
						</div>
					</div>
					<div className='modal-bottom-wrapper'>
						<label htmlFor='price' className='modal-bottom-label'>
							Enter your pledge
						</label>
						<div className='modal-bottom-right'>
							<input
								type='text'
								id='price'
								className='modal-bottom-input'
								value='25'
							/>
							<button className='modal-bottom-continue'>Continue</button>
						</div>
					</div>
				</div>
				<div className='modal-box-inner-desktop'>
					<div className='modal-up-wrapper'>
						<div className='input-box'>
							<input
								type='radio'
								name='pledge'
								id='two'
								className='modal-input-desktop'
							/>
						</div>
						<div className='modal-select-desktop'>
							<div className='modal-text-up'>
								<label
									htmlFor='two'
									className='modal-select-label-desktop'>
									Black Edition Stand
									<span className='modal-select-label-span-desktop'>
										Pledge $75 or more
									</span>
								</label>
								<div className='modal-box-inner-left-desktop'>
									<p className='modal-box-inner-left-price-desktop'>64</p>
									<p className='modal-box-inner-left-text-desktop'>left</p>
								</div>
							</div>
							<p className='modal-box-inner-text-desktop'>
								You get a Black Special Edition computer stand and a
								personal thank you. You’ll be added to our Backer member
								list. Shipping is included.
							</p>
						</div>
					</div>
					<div className='modal-bottom-wrapper'>
						<label htmlFor='price' className='modal-bottom-label'>
							Enter your pledge
						</label>
						<div className='modal-bottom-right'>
							<input
								type='text'
								id='price'
								className='modal-bottom-input'
								value='75'
							/>
							<button className='modal-bottom-continue'>Continue</button>
						</div>
					</div>
				</div>
				<div className='modal-box-inner-desktop'>
					<div className='modal-up-wrapper'>
						<div className='input-box'>
							<input
								type='radio'
								name='pledge'
								id='three'
								className='modal-input-desktop'
							/>
						</div>
						<div className='modal-select-desktop'>
							<div className='modal-text-up'>
								<label
									htmlFor='three'
									className='modal-select-label-desktop'>
									Mahogany Special Edition
									<span className='modal-select-label-span-desktop'>
										Pledge $200 or more
									</span>
								</label>
								<div className='modal-box-inner-left-desktop'>
									<p className='modal-box-inner-left-price-desktop'>0</p>
									<p className='modal-box-inner-left-text-desktop'>left</p>
								</div>
							</div>
							<p className='modal-box-inner-text-desktop'>
								You get two Special Edition Mahogany stands, a Backer
								T-Shirt, and a personal thank you. You’ll be added to our
								Backer member list. Shipping is included.
							</p>
						</div>
					</div>
					<div className='modal-bottom-wrapper'>
						<label htmlFor='price' className='modal-bottom-label'>
							Enter your pledge
						</label>
						<div className='modal-bottom-right'>
							<input
								type='text'
								id='price'
								className='modal-bottom-input'
							/>
							<button className='modal-bottom-continue'>Continue</button>
						</div>
					</div>
				</div>
				<div className='modal-box-inner'>
					<div className='modal-select'>
						<input
							type='radio'
							name='pledge'
							id='four'
							className='modal-input'
						/>
						<label htmlFor='four' className='modal-select-label'>
							Pledge with no reward
							<span className='modal-select-label-span'>
								Pledge $25 or more
							</span>
						</label>
					</div>
					<p className='modal-box-inner-text'>
						Choose to support us without a reward if you simply believe in
						our project. As a backer, you will be signed up to receive
						product updates via email.
					</p>
					<div className='modal-box-inner-left'>
						<p className='modal-box-inner-left-price'>64</p>
						<p className='modal-box-inner-left-text'>left</p>
					</div>
				</div>
				<div className='modal-box-inner'>
					<div className='modal-select'>
						<input
							type='radio'
							name='pledge'
							id='zero'
							className='modal-input'
						/>
						<label htmlFor='zero' className='modal-select-label'>
							Bamboo Stand
							<span className='modal-select-label-span'>
								Pledge $25 or more
							</span>
						</label>
					</div>
					<p className='modal-box-inner-text'>
						You get an ergonomic stand made of natural bamboo. You've
						helped us launch our promotional campaign, and you’ll be added
						to a special Backer member list.
					</p>
					<div className='modal-box-inner-left'>
						<p className='modal-box-inner-left-price'>101</p>
						<p className='modal-box-inner-left-text'>left</p>
					</div>
				</div>
				<div className='modal-box-inner'>
					<div className='modal-select'>
						<input
							type='radio'
							name='pledge'
							id='zero'
							className='modal-input'
						/>
						<label htmlFor='zero' className='modal-select-label'>
							Black Edition Stand
							<span className='modal-select-label-span'>
								Pledge $75 or more
							</span>
						</label>
					</div>
					<p className='modal-box-inner-text'>
						You get a Black Special Edition computer stand and a personal
						thank you. You’ll be added to our Backer member list. Shipping
						is included.
					</p>
					<div className='modal-box-inner-left'>
						<p className='modal-box-inner-left-price'>64</p>
						<p className='modal-box-inner-left-text'>left</p>
					</div>
				</div>
				<div className='modal-box-inner'>
					<div className='modal-select'>
						<input
							type='radio'
							name='pledge'
							id='zero'
							className='modal-input'
						/>
						<label htmlFor='zero' className='modal-select-label'>
							gany Special EMahodition
							<span className='modal-select-label-span'>
								Pledge $200 or more
							</span>
						</label>
					</div>
					<p className='modal-box-inner-text'>
						You get two Special Edition Mahogany stands, a Backer T-Shirt,
						and a personal thank you. You’ll be added to our Backer member
						list. Shipping is included.
					</p>
					<div className='modal-box-inner-left'>
						<p className='modal-box-inner-left-price'>0</p>
						<p className='modal-box-inner-left-text'>left</p>
					</div>
				</div>
			</div>
			<div className='complete'>
				<img
					src='src/images/icon-check.svg'
					alt='Success icon'
					className='complete-img'
				/>
				<h3 className='complete-title'>Thanks for your support!</h3>
				<p className='complete-text'>
					Your pledge brings us one step closer to sharing Mastercraft
					Bamboo Monitor Riser worldwide. You will get an email once our
					campaign is completed.
				</p>
				<button className='complete-btn'>Got it!</button>
			</div>
		</main>
	)
}
export default Main

import { useState } from 'react'
import { list } from './data'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
	return (
		<>
			<div className='shadow'></div>
			<nav className='nav wrapper'>
				<img
					src='src/images/logo.svg'
					alt='Company logo crowdfund'
					className='nav-logo'
				/>
				<button className='nav-mobile-hamburger'>
					<img
						src='src/images/icon-hamburger.svg'
						alt='Menu icon'
						className='nav-mobile-hamburger-icon'
					/>
				</button>

				<div className='nav-mobile-menu'>
					<a href='#' className='nav-mobile-menu-link'>
						About
					</a>
					<a href='#' className='nav-mobile-menu-link'>
						Discover
					</a>
					<a href='#' className='nav-mobile-menu-link'>
						Get Started
					</a>
				</div>
				<div className='nav-desktop-links'>
					<a href='#' className='nav-desktop-link'>
						About
					</a>
					<a href='#' className='nav-desktop-link'>
						Discover
					</a>
					<a href='#' className='nav-desktop-link'>
						Get Started
					</a>
				</div>
			</nav>
			<header className='header'>
				<picture>
					<source
						srcSet='src/images/image-hero-desktop.jpg'
						media='(min-width: 992px)'
					/>
					<img
						src='src/images/image-hero-mobile.jpg'
						alt='Macbook on the desk'
						className='header-img'
					/>
				</picture>
				<div className='header-shadow'></div>
			</header>
			<main className='main'>
				<div className='first-box'>
					<img
						src='src/images/logo-mastercraft.svg'
						alt='M letter'
						className='first-logo'
					/>
					<div className='first-box-content'>
						<h1 className='first-title'>
							Mastercraft Bamboo Monitor Riser
						</h1>
						<p className='first-text'>
							A beautiful & handcrafted monitor stand to reduce neck and
							eye strain.
						</p>
						<div className='btns'>
							<button className='first-btn'>Back this project</button>
							<button className='first-save'>
								<img
									src='src/images/icon-bookmark-default.svg'
									alt='Bookmark icon'
									className='main-save-img'
								/>
								<span className='bookmark-span'>Bookmark</span>
							</button>
						</div>
					</div>
				</div>
				<div className='second-box'>
					<div className='second-box-wrapper'>
						<div className='second-box-content'>
							<p className='second-box-content-price'>$89,914</p>
							<p className='second-box-content-text'>of $100,000 backed</p>
							<div className='second-box-content-line'></div>
						</div>
						<div className='second-box-content'>
							<p className='second-box-content-price'>5,007</p>
							<p className='second-box-content-text'>total backers</p>
							<div className='second-box-content-line'></div>
						</div>
						<div className='second-box-content'>
							<p className='second-box-content-price'>56</p>
							<p className='second-box-content-text'>days left</p>
							<div className='second-box-content-line'></div>
						</div>
					</div>
					<div className='second-box-line'></div>
				</div>
				<div className='last-box'>
					<h2 className='last-box-title'>About this project</h2>
					<p className='last-box-text'>
						The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
						platform that elevates your screen to a more comfortable
						viewing height. Placing your monitor at eye level has the
						potential to improve your posture and make you more comfortable
						while at work, helping you stay focused on the task at hand.
					</p>
					<p className='last-box-text'>
						Featuring artisan craftsmanship, the simplicity of design
						creates extra desk space below your computer to allow notepads,
						pens, and USB sticks to be stored under the stand.
					</p>
					<div className='last-box-inner'>
						<div className='last-box-up-wrapper'>
							<h3 className='last-box-inner-title'>Bamboo Stand</h3>
							<p className='last-box-inner-pledge'>Pledge $25 or more</p>
						</div>
						<p className='last-box-inner-text'>
							You get an ergonomic stand made of natural bamboo. You've
							helped us launch our promotional campaign, and you’ll be
							added to a special Backer member list.
						</p>
						<div className='last-box-down-wrapper'>
							<div className='last-box-inner-left'>
								<p className='last-box-inner-left-price'>101</p>
								<p className='last-box-inner-left-text'>left</p>
							</div>
							<button className='last-box-inner-left-btn'>
								Select Reward
							</button>
						</div>
					</div>
					<div className='last-box-inner'>
						<div className='last-box-up-wrapper'>
							<h3 className='last-box-inner-title'>Black Edition Stand</h3>
							<p className='last-box-inner-pledge'>Pledge $75 or more</p>
						</div>
						<p className='last-box-inner-text'>
							You get a Black Special Edition computer stand and a personal
							thank you. You’ll be added to our Backer memmber list.
							Shipping is included.
						</p>
						<div className='last-box-down-wrapper'>
							<div className='last-box-inner-left'>
								<p className='last-box-inner-left-price'>64</p>
								<p className='last-box-inner-left-text'>left</p>
							</div>
							<button className='last-box-inner-left-btn'>
								Select Reward
							</button>
						</div>
					</div>
					<div className='last-box-inner'>
						<div className='last-box-up-wrapper'>
							<h3 className='last-box-inner-title'>
								Mahogany Special Edition
							</h3>
							<p className='last-box-inner-pledge'>Pledge $200 or more</p>
						</div>
						<p className='last-box-inner-text'>
							You get two Special Edition Mahogany stands, a Backer
							T-Shirt, and a personal thank you. You’ll be added to our
							Backer member list. Shipping is included.
						</p>
						<div className='last-box-down-wrapper'>
							<div className='last-box-inner-left'>
								<p className='last-box-inner-left-price'>0</p>
								<p className='last-box-inner-left-text'>Out of Stock</p>
							</div>
							<button className='last-box-inner-left-btn'>
								Out of Stock
							</button>
						</div>
					</div>
				</div>
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
										<p className='modal-box-inner-left-price-desktop'>
											64
										</p>
										<p className='modal-box-inner-left-text-desktop'>
											left
										</p>
									</div>
								</div>
								<p className='modal-box-inner-text-desktop'>
									Choose to support us without a reward if you simply
									believe in our project. As a backer, you will be signed
									up to receive product updates via email.
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
										<p className='modal-box-inner-left-price-desktop'>
											101
										</p>
										<p className='modal-box-inner-left-text-desktop'>
											left
										</p>
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
										<p className='modal-box-inner-left-price-desktop'>
											64
										</p>
										<p className='modal-box-inner-left-text-desktop'>
											left
										</p>
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
										<p className='modal-box-inner-left-text-desktop'>
											left
										</p>
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
							Choose to support us without a reward if you simply believe
							in our project. As a backer, you will be signed up to receive
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
							helped us launch our promotional campaign, and you’ll be
							added to a special Backer member list.
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
							thank you. You’ll be added to our Backer member list.
							Shipping is included.
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
							You get two Special Edition Mahogany stands, a Backer
							T-Shirt, and a personal thank you. You’ll be added to our
							Backer member list. Shipping is included.
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
		</>
	)
}
export default App

//   About
//   Discover
//   Get Started

//   Mastercraft Bamboo Monitor Riser
//

//
//   Bookmark

//   $89,914
//
//

//

//

//   Bamboo Stand
//
//
//   101 left
//   Select Reward

//
//
//
//   64 left
//   Select Reward

//
//
//
//   0 left
//   Out of Stock

//   <!-- Selection modal start -->

//   Back this project
//

//   Pledge with no reward
//

//
//   Pledge $25 or more
//
//   101 left

//   <!-- Selected pledge start -->
//   Enter your pledge
//   $25
//   Continue
//   <!-- Selected pledge end -->

//
//   Pledge $75 or more
//
//   64 left

//   <!-- Selected pledge start -->
//   Enter your pledge
//   $75
//   Continue
//   <!-- Selected pledge end -->

//
//   Pledge $200 or more
//
//   0 left

//   <!-- Selected pledge  start -->
//   Enter your pledge
//   $200
//   Continue
//   <!-- Selected pledge end -->

//   <!-- Selection modal end -->

//   <!-- Success modal start -->

//   Thanks for your support!
//   .
//

//   <!-- Success modal end -->

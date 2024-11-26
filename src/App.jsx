import { useState } from 'react'
import { list } from './data'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
	return (
		<>
			<nav className='nav-mobile'>
				<img
					src='src/images/logo.svg'
					alt='Company logo crowdfund'
					className='nav-mobile-logo'
				/>
				<button className='nav-mobile-hamburger'></button>
			</nav>
			<header className='header'>
				<img
					src='src/images/image-hero-mobile.jpg'
					alt='Macbook on the desk'
					className='header-img'
				/>
			</header>
			<main className='main'>
				<div className='main-box'>
					<img
						src='src/images/logo-mastercraft.svg'
						alt='M letter'
						className='main-logo'
					/>
					<h1 className='main-title'>Mastercraft Bamboo Monitor Riser</h1>
					<p className='main-text'>
						A beautiful & handcrafted monitor stand to reduce neck and eye
						strain.
					</p>
					<div className='btns'>
						<button className='main-btn'>Back this project</button>
						<button className='main-save'>
							<img
								src='src/images/icon-bookmark.svg'
								alt='Bookmark icon'
								className='main-save-img'
							/>
						</button>
					</div>
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

//   Back this project
//   Bookmark

//   $89,914 of $100,000 backed
//   5,007 total backers
//   56 days left

//   About this project

//   The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
//   to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
//   your posture and make you more comfortable while at work, helping you stay focused on the task at hand.

//   Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
//   to allow notepads, pens, and USB sticks to be stored under the stand.

//   Bamboo Stand
//   Pledge $25 or more
//   You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
//   you’ll be added to a special Backer member list.
//   101 left
//   Select Reward

//   Black Edition Stand
//   Pledge $75 or more
//   You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
//   member list. Shipping is included.
//   64 left
//   Select Reward

//   Mahogany Special Edition
//   Pledge $200 or more
//   You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
//   to our Backer member list. Shipping is included.
//   0 left
//   Out of Stock

//   <!-- Selection modal start -->

//   Back this project
//   Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?

//   Pledge with no reward
//   Choose to support us without a reward if you simply believe in our project. As a backer,
//   you will be signed up to receive product updates via email.

//   Bamboo Stand
//   Pledge $25 or more
//   You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
//   you’ll be added to a special Backer member list.
//   101 left

//   <!-- Selected pledge start -->
//   Enter your pledge
//   $25
//   Continue
//   <!-- Selected pledge end -->

//   Black Edition Stand
//   Pledge $75 or more
//   You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
//   member list. Shipping is included.
//   64 left

//   <!-- Selected pledge start -->
//   Enter your pledge
//   $75
//   Continue
//   <!-- Selected pledge end -->

//   Mahogany Special Edition
//   Pledge $200 or more
//   You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
//   to our Backer member list. Shipping is included.
//   0 left

//   <!-- Selected pledge  start -->
//   Enter your pledge
//   $200
//   Continue
//   <!-- Selected pledge end -->

//   <!-- Selection modal end -->

//   <!-- Success modal start -->

//   Thanks for your support!
//   Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
//   an email once our campaign is completed.
//   Got it!

//   <!-- Success modal end -->

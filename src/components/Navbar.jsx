import { navIcons, navLinks } from '#constants'
import dayjs from 'dayjs'
import React from 'react'

const Navbar = () => {
	return (
		<nav>
			<div>
				<img src="/images/logo.svg" width="14px" height="14px" alt="logo" />
				<p className="font-bold">Vijay's Portfolio</p>
				<ul>
					{navLinks.map(({ id, name }) => (
						<li key={id}>
							<p>{name}</p>
						</li>
					))}
				</ul>
			</div>
			<div>
				<ul>
					{navIcons.map(({ id, img }) => (
						<li key={id}>
							<img src={img} className="icon-hover" alt={`icon-${id}`} />
						</li>
					))}
				</ul>

				<time>{dayjs().format('ddd MMM D HH:mm:ss')}</time>
			</div>
		</nav>
	)
}

export default Navbar
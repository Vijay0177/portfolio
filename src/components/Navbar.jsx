import { navIcons, navLinks } from '#constants'
import useWindowStore from '#store/window'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
	const [currentTime, setCurrentTime] = useState(dayjs())
	const { openWindow } = useWindowStore()

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(dayjs())
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<nav>
			<div>
				<img src="/images/logo.svg" width="14px" height="14px" alt="logo" />
				<p className="font-bold">Vijay's Portfolio</p>
				<ul>
					{navLinks.map(({ id, name, type }) => (
						<li key={id} onClick={() => openWindow(type)}>
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

				<time>{currentTime.format('ddd MMM D HH:mm:ss')}</time>
			</div>
		</nav>
	)
}

export default Navbar
import React from 'react'
import Reveal from 'react-awesome-reveal'
import { Twitter, Link } from '@images/icons'
import { Button } from '@UI'
import { keyframes } from '@emotion/react'
import * as styles from './buttons.module.scss'

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const links = [
	{
		icon: <Twitter />,
		label: 'Twitter',
		href: 'https://twitter.com/lovesocietydao',
		className: styles.twitter,
	},
	{
		icon: <Link />,
		label: 'Haveaniceday.wtf',
		href: 'https://haveaniceday.wtf/',
	},
	{
		icon: <Link />,
		label: 'LoFi Hits',
		href: 'https://www.lofihits.wtf/',
		className: styles.lofi,
	},
]

const Buttons = () => {
	return (
		<div className={styles.buttonContainer}>
			{links.map(({ icon, label, href, className }, i) => (
				<Reveal
					keyframes={customAnimation}
					delay={i * 300}
					triggerOnce
					key={label}
				>
					<Button href={href} className={className && className}>
						<span>{icon}</span>
						{label}
					</Button>
				</Reveal>
			))}
		</div>
	)
}

export default Buttons

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import * as styles from './button.module.scss'

const Button = ({ href, className, children }) => {
	const classes = classnames(styles.button, className && className)

	return (
		<a href={href} className={classes} target='_blank' rel='noreferrer'>
			{children}
		</a>
	)
}

export default Button

Button.propTypes = {
	href: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
}

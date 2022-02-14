import React from 'react'
import { Fade } from 'react-awesome-reveal'
import ReactPlayer from 'react-player/lazy'
import { Layout, Seo } from '@global'
import { Container } from '@UI'
import { Buttons, Title } from '@components/home'

const IndexPage = () => {
	return (
		<Layout>
			<Seo />
			<Container>
				<ReactPlayer
					url='/lsdaopamp.mp4'
					width='100%'
					height='100%'
					controls
					fallback={<div style={{ height: '100vh' }} />}
				/>
			</Container>

			<Container section wrapper textCenter>
				<Fade triggerOnce fraction={0.6}>
					<Title>LSDao</Title>
				</Fade>

				<Buttons />
			</Container>
		</Layout>
	)
}

export default IndexPage

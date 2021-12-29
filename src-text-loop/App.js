import React, { Component } from 'react';
import { TextLoop } from 'react-text-loop-next';
import './app.css';

export default class Number extends React.Component {
	componentWillUnmount() {}
	componentDidMount() {}

	render() {
		return (
			<div style={{ margin: '0 auto', width: '100%', background: 'yellow', textAlign: 'center' }}>
				<TextLoop interval={1000}>
					{[...new Array(10).keys()].map((item, index) => (
						<div>
							<h1>{index + 1}</h1>
						</div>
					))}
				</TextLoop>
			</div>
		);
	}
}

import React, { Component } from 'react';
import Count from './components/Count';
import Person from './components/Person';

import DeviceEmulator from 'react-device-emulator';
import 'react-device-emulator/lib/styles/style.css';

import DeviceSimulator from 'react-device-simulator';

export default class App extends Component {
	render() {
		return (
			<div>
				{/**
			
				<h1>Welcome to React Device Emulator</h1>
				<DeviceEmulator type="mobile" withoutChrome width="100">
					<h1>Welcome to React Device Emulator</h1>
				</DeviceEmulator>
			*/}
				<DeviceSimulator>
					<h3 id="activity-name" class="rich_media_title" style="text-align: center;">
						一图看懂 | 最新公布的&ldquo;我为群众办实事&rdquo;12项公安交管便利措施都有啥？
					</h3>
					<p style="text-align: center; line-height: 16pt;">
						&nbsp;<span style="font-size: 12pt;">2021-05-10&nbsp; &nbsp; &nbsp;信息来源：公安部交通管理局&nbsp;</span>
					</p>
					<hr />
					<p class="rich_media_title" style="line-height: 26pt; text-align: justify;">
						<span style="font-size: 14pt;">
							<a title="考试" href="https://edrive-122-web.autobotstech.com/login">
								5月10日公安部召开新闻发布会
							</a>
							，通报将于今年6月1日实施的&ldquo;我为群众办实事&rdquo;公安交管12项便利措施。这12项措施都有啥？一图看懂。
						</span>
					</p>
					<p>
						<img
							style="display: block; margin-left: auto; margin-right: auto;"
							src="https://storage.autobotstech.com/f/tinymce/f8c573155a6e10e4f7534d7ad6e077bc.jpg"
							alt=""
							width="330"
							height="331"
						/>
					</p>
					<p style="line-height: 8pt;">
						<img
							style="display: block; margin-left: auto; margin-right: auto;"
							src="https://storage.autobotstech.com/f/tinymce/15f5727bb84659ac23a9e9ef64761f51.jpg"
							alt=""
							width="330"
							height="619"
						/>
					</p>
					<p style="line-height: 8pt;">
						<img
							style="display: block; margin-left: auto; margin-right: auto;"
							src="https://storage.autobotstech.com/f/tinymce/f972d4d892c049bb81403dc0b2359e0b.jpg"
							alt=""
							width="330"
							height="406"
						/>
					</p>
					<p style="line-height: 8pt;">
						<img
							style="display: block; margin-left: auto; margin-right: auto;"
							src="https://storage.autobotstech.com/f/tinymce/8dda6008fbbd2bdd84ea44b35e3c8968.jpg"
							alt=""
							width="330"
							height="676"
						/>
					</p>
					<p style="line-height: 8pt;">
						<img
							style="display: block; margin-left: auto; margin-right: auto;"
							src="https://storage.autobotstech.com/f/tinymce/7078942083c2c5dbbed69c8895e9a348.jpg"
							alt=""
							width="330"
							height="859"
						/>
					</p>
					<p style="line-height: 8pt;">
						<img
							style="display: block; margin-left: auto; margin-right: auto;"
							src="https://storage.autobotstech.com/f/tinymce/676464c03e4f51d21dc312eca1b70720.jpg"
							alt=""
							width="330"
							height="631"
						/>
					</p>
					<p style="text-align: center;">&nbsp;</p>
				</DeviceSimulator>
			</div>
		);
	}
}

import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import DonateType from "./panels/DonateType";
import TargetDonateStep1 from "./panels/TargetDonateStep1";
import TargetDonateStep2 from "./panels/TargetDonateStep2";
import RegularDonate from "./panels/RegularDonate";

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [targetDonate, setTargetDonate] = useState({
		title: '',
		target: '',
		amount: 100,
		description: ''
	});

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<View activePanel={activePanel} >
			<Home id='home' go={go} />
			<DonateType id='type' go={go} />
			<TargetDonateStep1 id="target-donate-step1" go={go} donate={targetDonate} setTargetDonate={setTargetDonate} />
			<TargetDonateStep2 id="target-donate-step2" go={go} donate={targetDonate}/>
			<RegularDonate id="regular-donate" go={go}/>
		</View>
	);
}

export default App;


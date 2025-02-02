import React from 'react';
import {ImageBackground, Text, ViewStyle} from 'react-native';
import {useTranslation} from 'react-i18next';
import useStore from "../../store";
import ProgressBar from "../ProgressBar";
import RelationshipHealth from "../RelationshipHealth";
import ChatSnippet from "../ChatSnippet";
import Meter from "../Meter";

const ROOT: ViewStyle = {
	backgroundColor: "black",
	width: "100%",
	height: "100%",
	alignItems: "center"
}

interface TopComponentProps {
	currentIndex: number;
}

function TopComponent ({currentIndex}: TopComponentProps) {
	const {t} = useTranslation ();
	const {} = useStore ();
	
	const imageBackgrounds = [
		require (`../../assets/images/background-0.png`),
		require (`../../assets/images/background-1.png`),
		require (`../../assets/images/background-2.png`),
		require (`../../assets/images/background-3.png`),
		require (`../../assets/images/background-4.png`),
	]
	
	// Function to switch between components
	const renderComponent = () => {
		switch (currentIndex) {
			case 1:
				return <RelationshipHealth/>;
			case 2:
				return <ChatSnippet/>;
			case 3:
				return <Meter/>;
			case 4:
				return <Meter meterTwo/>;
			default:
				return <Text></Text>; // Fallback component
		}
	};
	
	return (
		
		<ImageBackground
			style={ROOT}
			source={imageBackgrounds[currentIndex]}
		>
			<ProgressBar currentIndex={currentIndex}/>
			{renderComponent ()}
		</ImageBackground>
	);
}

export default TopComponent;

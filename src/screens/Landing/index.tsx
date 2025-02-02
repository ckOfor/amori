import React, {useState} from "react";
import {View, ViewStyle} from "react-native";
import {useTranslation} from "react-i18next";
import useStore from "../../store";
import {StatusBar} from "expo-status-bar";
import Analysis from "../../components/Analysis";
import TopComponent from "../../components/TopComponent";
import BottomComponent from "../../components/BottomComponent";

const ROOT: ViewStyle = {
	flex: 1,
}

function Landing () {
	const {t} = useTranslation ();
	const {} = useStore ();

	const [currentIndex, setCurrentIndex] = useState<number> (0);

	const handleCurrentIndexChange = (index: number) => {
		setCurrentIndex (index);
	}
	
	return (
		<View style={ROOT}>
			<StatusBar style={"light"}/>
			<Analysis/>
			<TopComponent currentIndex={currentIndex}/>
			<BottomComponent onPress={handleCurrentIndexChange} currentIndex={currentIndex}/>
		</View>
	);
}

export default Landing;

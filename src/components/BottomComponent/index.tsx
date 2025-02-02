import React from "react";
import {Dimensions, TouchableOpacity, ViewStyle} from "react-native";

const {width} = Dimensions.get ("window");

const ROOT: ViewStyle = {
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	zIndex: 10,
	height: "100%",
	justifyContent: "center",
	alignItems: "center",
};

interface BottomComponentProps {
	onPress: (index: number) => void;
	currentIndex: number;
}

function BottomComponent ({onPress, currentIndex}: BottomComponentProps) {
	const handleTap = (event: any) => {
		const tapX = event.nativeEvent.locationX;
		
		// Define the dead zone in the center of the screen (e.g., 30% of the width)
		const deadZoneStart = width * 0.35;
		const deadZoneEnd = width * 0.65;
		
		if (tapX > deadZoneStart && tapX < deadZoneEnd) {
			return; // Ignore taps in the middle
		}
		
		const newIndex =
			tapX < width * 0.25
				? Math.max (0, currentIndex - 1) // Move back, but stay at 0 minimum
				: currentIndex === 4
					? 4 // Stay at 4
					: currentIndex + 1; // Move forward
		
		onPress (newIndex);
	};
	
	return <TouchableOpacity style={ROOT} activeOpacity={1} onPress={handleTap}/>;
}

export default BottomComponent;

import React from "react";
import {Image, ImageStyle, View, ViewStyle} from "react-native";

const ROOT: ViewStyle = {
	marginTop: 20,
	flexDirection: "row",
	justifyContent: "center",
}

const IMAGE: ImageStyle = {
	height: 100,
	marginHorizontal: 5
}

interface ProgressComponentProps {
	currentIndex: number;
}

function ProgressBarComponent ({currentIndex}: ProgressComponentProps) {
	return (
		<View style={ROOT}>
			{[...Array (6)].map ((_, index) => {
				const progress = currentIndex < index
					? require ("../../assets/images/unstroke.png")
					: require ("../../assets/images/stroke.png")
				
				return (
					<Image
						key={index}
						source={progress}
						style={IMAGE}
						resizeMode="contain"
					/>
				)
			})}
		</View>
	);
}

export default ProgressBarComponent;

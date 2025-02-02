import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

interface CustomButtonProps {
	text: string;
	imageSource: any;
	isTransparent?: boolean;
	onPress?: () => void;
}

function CustomButton ({text, imageSource, isTransparent = false, onPress}: CustomButtonProps) {
	return (
		<TouchableOpacity
			style={[styles.button, isTransparent ? styles.transparentButton : styles.solidButton]}
			onPress={onPress}
			activeOpacity={0.8}
		>
			<View style={styles.content}>
				<Image source={imageSource} style={styles.image} resizeMode="contain"/>
				<Text style={styles.text}>{text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create ({
	button: {
		width: "100%",
		paddingHorizontal: 25,
		paddingVertical: 12,
		borderRadius: 72,
		alignItems: "center",
		justifyContent: "center",
	},
	solidButton: {
		backgroundColor: "#6C62E4",
	},
	transparentButton: {
		backgroundColor: "transparent",
		borderWidth: 2,
		borderColor: "white",
	},
	content: {
		flexDirection: "row",
		alignItems: "center",
	},
	image: {
		width: 24,
		height: 24,
		marginRight: 10,
	},
	text: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default CustomButton;

import React from 'react';
import {Image, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {useTranslation} from 'react-i18next';
import CustomButton from "../CustomButton/imdex";

const BASE: ViewStyle = {
	flex: 1,
	alignItems: "center",
	width: "100%",
	bottom: 20,
}

const CLOSE: ViewStyle = {
	alignItems: "flex-end",
	width: "90%",
}

const BACKGROUND: ViewStyle = {
	alignItems: "center",
	backgroundColor: "black",
	paddingVertical: 50,
	width: "90%",
	height: "90%",
	marginTop: 50,
	borderRadius: 16,
	justifyContent: "space-between",
}

const IMAGE_VIEW: ViewStyle = {
	flexDirection: "row"
}

const SMOOTH: TextStyle = {
	fontSize: 20,
	color: "#fff",
	textTransform: "uppercase",
	textAlign: "center"
}

const WITH: TextStyle = {
	fontSize: 18,
	color: "#fff",
	textAlign: "center",
	marginTop: 20
}

interface MeterProps {
	meterTwo?: boolean;
}

function Meter ({meterTwo}: MeterProps) {
	const {t} = useTranslation ();
	
	const imgaePath = meterTwo ? require ('../../assets/images/meterTwo.png') : require ('../../assets/images/meterOne.png')
	
	return (
		<View
			style={BASE}
		>
			<View
				style={CLOSE}
			>
				<Image
					source={require ('../../assets/images/x.png')}
					style={styles.image}
					resizeMode="contain"
				/>
			</View>
			
			<View
				style={BACKGROUND}
			>
				<View style={IMAGE_VIEW}>
					<Image
						source={imgaePath}
						style={styles.meter}
						resizeMode="contain"
					/>
					
					<Image
						source={require ('../../assets/images/smiley.png')}
						style={styles.smiley}
						resizeMode="contain"
					/>
				</View>
				
				<View>
					<Text
						style={SMOOTH}
					>
						{t ("meter.smooth")}
					</Text>
					
					<Text
						style={WITH}
					>
						{t ("meter.with")}
					</Text>
				</View>
				
				<View>
					<CustomButton
						isTransparent
						text={t ("relationShipHealth.share")}
						imageSource={require ("../../assets/images/share.png")}
						onPress={() => console.log ("Solid button pressed")}
					/>
				</View>
			</View>
		</View>
	);
}

export default Meter;

const styles = StyleSheet.create ({
	image: {
		width: 24,
		height: 24,
		marginRight: 10,
	},
	meter: {
		width: 240,
		height: 120,
		marginRight: 10,
	},
	smiley: {
		width: 40,
		height: 60,
		marginRight: 10,
	}
});

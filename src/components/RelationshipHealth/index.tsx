import React from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {useTranslation} from 'react-i18next';
import CustomButton from "../CustomButton/imdex";

const BASE: ViewStyle = {
	flex: 1,
	alignItems: "center",
	justifyContent: "space-between",
}

const PERCENTAGE_VIEW: ViewStyle = {
	flexDirection: "row",
	justifyContent: "center",
}

const RESULTS: TextStyle = {
	fontSize: 16,
	color: "#fff",
	textTransform: "uppercase",
}

const AMOUNT: TextStyle = {
	fontSize: 88,
	color: "#fff",
}

const PERCENTAGE: TextStyle = {
	fontSize: 37,
	color: "#fff",
	marginTop: 10
}

const RELATIONSHIP: TextStyle = {
	fontSize: 22,
	color: "#fff",
	textAlign: "center"
}

const SCORE: TextStyle = {
	fontSize: 14,
	color: "#fff",
	textAlign: "center"
}

function RelationshipHealth () {
	const {t} = useTranslation ();
	
	return (
		<View
			style={BASE}
		>
			<Text
				style={RESULTS}
			>
				{t ("relationShipHealth.results")}
			</Text>
			
			<View
				style={PERCENTAGE_VIEW}
			>
				<Text
					style={AMOUNT}
				>
					{t ("relationShipHealth.amount")}
				</Text>
				
				<Text
					style={PERCENTAGE}
				>
					{t ("relationShipHealth.percentage")}
				</Text>
			</View>
			
			<Text
				style={RELATIONSHIP}
			>
				{t ("relationShipHealth.relationship")}
			</Text>
			
			<Text
				style={SCORE}
			>
				{t ("relationShipHealth.score")}
			</Text>
			
			<CustomButton
				text={t ("relationShipHealth.share")}
				imageSource={require ("../../assets/images/share.png")}
				onPress={() => console.log ("Solid button pressed")}
			/>
			
			<View/>
		</View>
	);
}

export default RelationshipHealth;

import React from 'react';
import {Image, StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {useTranslation} from 'react-i18next';
import CustomButton from "../CustomButton/imdex";

const ROOT: ViewStyle = {
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
	marginTop: 20,
	borderRadius: 16,
	justifyContent: "space-between",
}

const TEXT_VIEW: ViewStyle = {
	height: "45%",
	justifyContent: "space-between",
}

const TOP_TEXT: TextStyle = {
	fontSize: 14,
	color: "#fff",
	textAlign: "center"
}

const ROW: ViewStyle = {
	flexDirection: "row"
}

const ROW_TEXT: TextStyle = {
	fontSize: 14,
	color: "#fff",
	textAlign: "left",
	lineHeight: 20.8,
}

const NURTURE: TextStyle = {
	fontSize: 14,
	textAlign: "center",
	top: 20,
	color: "#383838"
}


function ChatSnippet () {
	const {t} = useTranslation ();
	
	const returnRowAndColumn = (title: string, body: string, description: string, color: string) => {
		return (
			<View>
				<View
					style={ROW}
				>
					<Text
						style={[ROW_TEXT, {
							color: color,
						}]}
					>
						{title}
					</Text>
					
					<Text
						style={ROW_TEXT}
					>
						{body}
					</Text>
				</View>
				
				<Text
					style={ROW_TEXT}
				>
					{description}
				</Text>
			</View>
		)
	}
	
	return (
		<View
			style={ROOT}
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
				<Text
					style={TOP_TEXT}
				>
					{t ("chatSnippet.top")}
				</Text>
				
				<View
					style={TEXT_VIEW}
				>
					{returnRowAndColumn (t ("chatSnippet.you"), t ("chatSnippet.hey"), t ("chatSnippet.headsUp"), "#6C62E4")}
					{returnRowAndColumn (t ("chatSnippet.george"), t ("chatSnippet.no"), t ("chatSnippet.time"), "#E26CFF")}
					{returnRowAndColumn (t ("chatSnippet.you"), t ("chatSnippet.thanks"), t ("chatSnippet.more"), "#6C62E4")}
					{returnRowAndColumn (t ("chatSnippet.george"), t ("chatSnippet.of"), t ("chatSnippet.when"), "#E26CFF")}
				</View>
				
				<Text
					style={NURTURE}
				>
					{t ("chatSnippet.nuture")}
				</Text>
				
				<View>
					<CustomButton
						text={t ("relationShipHealth.share")}
						imageSource={require ("../../assets/images/share.png")}
						onPress={() => console.log ("Solid button pressed")}
					/>
				</View>
			</View>
		</View>
	);
}

export default ChatSnippet;

const styles = StyleSheet.create ({
	image: {
		width: 24,
		height: 24,
		marginRight: 10,
	}
});

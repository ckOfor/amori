import {View} from "react-native"
import {useTranslation} from "react-i18next"
import {useAnalysis} from "../hooks/useAnalysis";

function AnalysisComponent (): JSX.Element {
	const {t} = useTranslation ()
	const {analysis, isLoading, error} = useAnalysis ()
	
	return (
		<View>
		
		</View>
	)
}

export default AnalysisComponent


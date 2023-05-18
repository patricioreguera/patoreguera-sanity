"client component";
import styles from "./style/Title.module.css";

const Title = ({ text, size = "large" }) => {
	const divideText = (promptText) => {
		//Busca los indices
		const firstCut = promptText.indexOf("ª");
		const secondCut = promptText.indexOf("º");
		//divide el texto
		const firstText = promptText.substring(0, firstCut);
		const hilightText = promptText.substring(firstCut + 1, secondCut);
		const restText = promptText.substring(secondCut + 1, promptText.lenght);

		return (
			<h1 className={styles[size]}>
				{firstText}
				{hilightText && <span className={styles.gradient}>{hilightText}</span>}
				{restText}
			</h1>
		);
	};

	return <>{divideText(text)}</>;
};

export default Title;

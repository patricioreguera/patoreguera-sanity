import styles from "../components/@Pato/Cards/Cards.module.css";
import ProjectsCards from "./ProjectsCards";

const Projects = async () => {
	return (
		<>
			<div className={styles.container}>
				<ProjectsCards />
			</div>
		</>
	);
};

export default Projects;

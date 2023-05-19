import { Button, Title, Cards } from "./components/@Pato";
import styles from "./page.module.css";
import ProjectsCards from "./projects/ProjectsCards";
import { getProjects } from "@/sanity/sanity-utils";

const Home = async () => {
	const projects = await getProjects();
	return (
		<>
			<div className={styles.main_container}>
				<div className={styles.main_title_container}>
					<Title
						text={"Aprende ªJavaScript y Reactº de manera fácil y divertida"}
						size={"l"}
					/>
					<p>
						Sumérgete en nuestros tutoriales y aprende a crear aplicaciones web
						modernas con JavaScript y React
					</p>
					<Button text={"Contactar"} />
				</div>
				<div></div>
			</div>
			<div className={styles.second_container}>
				<Title text="Sitios webs a ªtus necesidadesº" size="s" />
				<p>
					una colección completa de tutoriales que te guiarán en el aprendizaje
					de JavaScript y React. Nuestros tutoriales están diseñados para
					principiantes y desarrolladores intermedios, y cubren desde los
					conceptos básicos hasta proyectos más avanzados. Ya sea que estés
					buscando fortalecer tus habilidades en JavaScript puro o sumergirte en
					el emocionante mundo de React, estamos aquí para ayudarte en tu camino
					hacia el dominio de estas poderosas tecnologías web.
				</p>
			</div>
			<div className={styles.container}>
				<ProjectsCards projects={projects} />
			</div>
		</>
	);
};

export default Home;

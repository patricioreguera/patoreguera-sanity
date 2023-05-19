/* import { Button, Title, Cards } from "./components/@Pato";
import styles from "./page.module.css";
import ProjectsCards from "./projects/ProjectsCards";
 */
import { createClient, groq } from "next-sanity";

const clientData = {
	projectId: process.env.NEXT_PUBLIC_SANITY,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	apiVersion: "2023-05-18",
};

const getProjects = () => {
	return createClient(clientData).fetch(
		groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image":image.asset->url,
            url,
            content
        }`
	);
};

const Home = async () => {
	const projects = await getProjects();
	return (
		<>
			{projects.map((project) => (
				<h1 key={project.id}>{project.name}</h1>
			))}
			{/* 		<div className={styles.main_container}>
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
			</div> */}
		</>
	);
};

export default Home;

export const revalidate = 30; // revalidate this page every 60 seconds

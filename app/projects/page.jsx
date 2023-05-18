"use client";
import { getProjects } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import styles from "../components/@Pato/Cards/Cards.module.css";
import Image from "next/image";

const Projects = async () => {
	const projects = await getProjects();

	return (
		<>
			<div className={styles.container}>
				{projects.map((project) => (
					<div className={styles.cards_container} key={project.id}>
						<Image
							className={styles.car_image}
							src={project.image}
							width={400}
							height={264}
							alt={project.name}
						/>
						<div className={styles.card_titles}>
							<h1>{project.name}</h1>
							<PortableText value={project.content} />
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Projects;

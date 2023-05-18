import React from "react";
import Link from "next/link";
import styles from "./styles/Navegation.module.css";

const LINKS = [
	{
		label: "Home",
		route: "/",
	},
	{
		label: "Projects",
		route: "/projects",
	},
	{
		label: "Admin",
		route: "/admin",
	},
];

const Navegation = () => {
	return (
		<header className={styles.header}>
			<nav>
				<ul className={styles.navegation}>
					{LINKS.map(({ label, route }) => (
						<li key={route} className={styles.navegation_item}>
							<Link href={route}>{label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export default Navegation;

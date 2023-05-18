import "./globals.css";
import { Inter } from "next/font/google";
import Navegation from "./components/Navegation/Navegation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "patoreguera ",
	description: "created by next and sanity",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navegation />
				{children}
			</body>
		</html>
	);
}

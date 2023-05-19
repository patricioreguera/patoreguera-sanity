import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
	projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
	dataset: process.env.REACT_DATASET,
	title: "patoreguera",
	apiVersion: "2023-05-18",
	basePath: "/admin",
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;

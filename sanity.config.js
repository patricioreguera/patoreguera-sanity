import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
	projectId: "2piqszv7",
	dataset: "production",
	title: "patoreguera",
	apiVersion: "2023-05-18",
	basePath: "/admin",
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;

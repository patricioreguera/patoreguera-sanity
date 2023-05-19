import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
	projectId: process.env.NEXT_PUBLIC_SANITY,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
	title: "patoreguera",
	apiVersion: "2023-05-18",
	basePath: "/admin",
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;

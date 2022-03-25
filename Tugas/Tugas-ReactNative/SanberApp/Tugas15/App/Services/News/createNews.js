import { client } from "../client";

export const createNews = async ({ title, value }) =>
	client.post(`/news`, { title, value });

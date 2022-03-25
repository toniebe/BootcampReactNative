import { client } from "../client";
export const updateNews= async ({id , title, value }) =>
	client.put(`/news/${id}`, { title, value });
import { client } from "../client";

export const deleteNews = async ({ id }) => client.delete(`/news/${id}`);

import { client } from "../client";

export const listNews = async () => client.get(`/news`);

import { client } from "../client";

export const loginUser = ({ email, password }) =>
	client.post("/auth", { email, password });

import { client } from "../client";

export const registerUser = ({ email, name, password }) =>
	client.post("/users", { email, name, password });

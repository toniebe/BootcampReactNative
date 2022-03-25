import { client } from "../client";

// Validasi token dengan cara request
// profile user dari token yang dimiliki
export const me = async ({ token }) =>
	client.get("/users/me", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

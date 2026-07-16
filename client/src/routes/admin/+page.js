import { browser } from "$app/environment";
import { error, redirect } from "@sveltejs/kit";

export const load = () => {
  if (browser) {
    const user = localStorage.getItem("user");
    if (!user) {
      throw redirect(307, "/auth/login");
    }

    const roles = JSON.parse(user).roles || [];
    if (!roles.includes("ADMIN")) {
      throw error(403, "Access denied");
    }
  }
};

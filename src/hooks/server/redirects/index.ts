import { redirect } from "@sveltejs/kit";
import type { Handle } from "@sveltejs/kit";
import { redirects } from "./redirect.json";

export const handle: Handle = async ({ event, resolve }) => {
  for (const redirection of redirects) {
    const regex = new RegExp(redirection.match);
    if (regex.test(event.url.pathname)) {
      return redirect(redirection.status, event.url.pathname.replace(regex, redirection.destination));
    }
  }
  return resolve(event);
};

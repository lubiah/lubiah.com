import { sequence } from "@sveltejs/kit/hooks";
import { handle as redirectHandle } from "./hooks/server/redirects";

export const handle = sequence(redirectHandle);
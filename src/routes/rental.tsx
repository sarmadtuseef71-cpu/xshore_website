import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/rental")({
  beforeLoad: () => {
    throw redirect({ to: "/equipment-rental", replace: true, statusCode: 301 });
  },
});
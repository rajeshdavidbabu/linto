import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export let loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;

  return json({ id });
};

export default function Linto() {
  const { id } = useLoaderData<typeof loader>();

  return <>Linto page is working {id}</>;
}

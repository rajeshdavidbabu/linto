import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { supabase } from "~/lib/supabase.server";

export let loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;

  try {
    // Select data from Supabase table based on id
    const { data, error } = await supabase
      .from("linkedin-profile")
      .select("*")
      .eq("id", id)
      .single(); // Assuming you expect only one record or use `limit(1)` if multiple records might match

    if (error) {
      throw new Error(`Supabase query error: ${error.message}`);
    }

    if (data) {
      // Data found for the given id
      return json({ data });
    } else {
      // No data found for the given id
      return json({ data: null, message: "No data found for the given id" });
    }
  } catch (error) {
    console.error("There was an error!", error);
    return json(
      { error: "There was an error processing your request.", data: null },
      { status: 500 }
    );
  }
};

export default function Linto() {
  const { data } = useLoaderData<typeof loader>();

  return <>Linto page is working {JSON.stringify(data, null, 2)}</>;
}

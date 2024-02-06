import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { supabase } from "~/lib/supabase.server";
import { LintoView } from "~/components/linto-view";
import { Command } from "lucide-react";
import { ThemeToggle } from "./resources.theme-toggle";

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

  return (
    <section className="w-full h-screen flex flex-col">
      <nav className="flex items-center justify-between p-4 w-full">
        <Link to="/" className="flex items-center space-x-2">
          <Command className="h-8 w-8" />
          <h1 className="text-xl font-semibold">Linto</h1>
        </Link>
        <ThemeToggle />
      </nav>
      <div className="relative h-screen w-screen bg-background">
        <LintoView />
      </div>
    </section>
  );
}

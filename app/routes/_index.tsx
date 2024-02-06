import { Link } from "@remix-run/react";
import { Command } from "lucide-react";
import { ThemeToggle } from "./resources.theme-toggle";
import { BackgroundBeamsDemo } from "~/components/hero";
import InputPrompt from "~/components/input-url";
import { ActionFunctionArgs, json, redirect } from "@remix-run/node";
import { supabase } from "~/lib/supabase.server";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const linkedinProfileUrl = body.get("linkedinurl") as string;

  const { data: existingData, error } = await supabase
    .from("linkedin-profile")
    .select("*")
    .eq("linkedin_profile_url", linkedinProfileUrl);

  if (error) {
    throw new Error(`HTTP error! status: ${error.message}`);
  }

  console.log("existingData ", existingData);

  // Data is already in the database just show the Linto grids
  if (existingData && existingData.length > 0) {
    return redirect(`/linto/${existingData[0].id}`);
  }

  const accessToken = "SmBueMGlXivYiF_mPOf_YA";
  const url = `https://nubela.co/proxycurl/api/v2/linkedin?linkedin_profile_url=${encodeURIComponent(
    linkedinProfileUrl
  )}`;

  const requestOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("responseData", responseData);

    const {
      first_name,
      last_name,
      follower_count,
      occupation,
      headline,
      experiences,
      country_full_name,
      city,
    } = responseData;
    const experience_one = experiences[0];
    const experience_two = experiences[1];
    const experience_three = experiences[2];
    const experience_four = experiences[3];

    const data = {
      linkedin_profile_url: linkedinProfileUrl,
      first_name,
      last_name,
      follower_count,
      occupation,
      country_full_name,
      city,
      experience_one,
      experience_two,
      experience_three,
      experience_four,
      headline,
    };

    const { data: insertedData, error } = await supabase
      .from("linkedin-profile")
      .upsert(data)
      .select();

    console.log("data from database ", data);
    if (insertedData && insertedData.length > 0) {
      return redirect(`/linto/${insertedData[0].id}`);
    }
  } catch (error) {
    return json(
      { error: "There was an error processing your request." },
      { status: 500 }
    );
  }
}

export default function Index() {
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
        <BackgroundBeamsDemo>
          <InputPrompt />
        </BackgroundBeamsDemo>
      </div>
    </section>
  );
}

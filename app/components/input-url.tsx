import { useState } from "react";
import { Input } from "./ui/input";
import { Forward } from "lucide-react";
import { Form } from "@remix-run/react";
import { Button } from "./ui/button";

const InputPrompt = () => {
  const [input, setInput] = useState("");

  const onSubmit = () => {
    console.log(input);
  };

  return (
    <Form
      className="relative px-8 w-full max-w-[400px] flex w-full max-w-sm items-center space-x-2"
      method="post"
    >
      <Input
        // autoFocus
        value={input}
        placeholder="Enter your linkedin profile link"
        onChange={(e) => setInput(e.target.value)}
        className="bg-white dark:bg-transparent"
        type="text"
        name="linkedinurl"
      />
      <Button type="submit" onClick={onSubmit}>
        {" "}
        Get Linto
      </Button>
    </Form>
  );
};

export default InputPrompt;

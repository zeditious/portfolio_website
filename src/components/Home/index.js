import Typewriter from "typewriter-effect";
import { useForm, yupResolver } from "@mantine/form";
import { Button, TextInput, Textarea } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().required(),
});

export default function Home() {
  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const submit = (values) => {
    console.log(values);
    form.reset();
    showNotification({
      title: "Message Sent",
      message: "Successfully sent message to Trevan Seay!",
      color: "green",
    });
  };

  return (
    <div>
      <div
        id="/"
        className="flex flex-col h-screen text-white items-center justify-center"
      >
        <h1 className="text-5xl md:text-8xl">
          Hello,
          <br />
          My name is Ian
        </h1>
        <Typewriter
          options={{
            strings: ["Pleased to meet you", "Let's get to know each other"],
            wrapperClassName: "text-xl",
            cursorClassName: "text-xl",
            autoStart: true,
            loop: true,
            deleteChars: "0",
          }}
        />
        <div className="pb-12"></div>
        <div className="animate-bounce bg-stone-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-stone-500"
            fill="stone-800"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

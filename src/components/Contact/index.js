import { useForm, yupResolver } from "@mantine/form";
import { Button, TextInput, Textarea } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import * as Yup from "yup";
import { Send } from "tabler-icons-react";

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  message: Yup.string().required(),
});

export default function Contact() {
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
        <h2 className="text-4xl md:text-7xl">Contact Me:</h2>
        <div className="flex flex-col w-full items-center ">
          <form
            onSubmit={form.onSubmit((values) => submit(values))}
            className="flex flex-col items-center justify-center gap-5 my-10 w-3/4 md:w-1/2"
          >
            <TextInput
              label="Name"
              styles={{ label: { fontWeight: "bold" } }}
              variant="filled"
              size="md"
              required
              className="text-white w-full"
              placeholder="Enter your name..."
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              styles={{ label: { fontWeight: "bold" } }}
              variant="filled"
              size="md"
              required
              className="w-full"
              placeholder="Enter your email..."
              {...form.getInputProps("email")}
            />
            <Textarea
              label="Message"
              styles={{ label: { fontWeight: "bold" } }}
              variant="filled"
              size="md"
              required
              autosize
              className="w-full"
              minRows={6}
              placeholder="Enter your message..."
              {...form.getInputProps("message")}
            />
            <Button
              type="submit"
              variant="default"
              size="md"
              fullWidth
              color="blue"
              leftIcon={<Send />}
              disabled={!form.isDirty()}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

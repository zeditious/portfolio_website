import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function contact(req, res) {
  const { email, subject, message, name } = req.body;

  const msg = {
    from: "contact@ianallish.com",
    to: email,
    subject,
    name,
    text: message,
  };

  await sgMail
    .send(msg)
    .then(() => {
      return res.status(200).json({ message: `Email has been sent` });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: "Error sending email" });
    });
}

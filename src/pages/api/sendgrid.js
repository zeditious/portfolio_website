import sgMail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function contact(req, res) {
  const msg = {
    from: "contact@ianallish.com",
    to: "ian@ianallish.com",
    subject: `${req.body.subject}`,
    html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
      </html>`,
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

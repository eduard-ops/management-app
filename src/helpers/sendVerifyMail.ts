import nodemailer from "nodemailer";

import dotenv from "dotenv";

dotenv.config();

const { META_PASSWORD, META_EMAIL } = process.env;

export const sendVerifyMail = async (code: number, email: string) => {
  const htmlCode = `<!DOCTYPE html>
<html>
  <head>
    <metacharset="utf-8">
    <title>Verification code</title>
  </head>
  <body>
    <p>Hello</p>
    <p>Your verification code: <strong>${code}</strong></p>
    <p>The code will be valid until: <strong>10 minutes</strong></p>
    <p>Best regards,</p>
    <p>Your team</p>
  </body>
</html>`;

  try {
    const message = {
      to: email,
      from: META_EMAIL,
      subject: "Verification code",
      html: htmlCode,
    };
    const transporter = nodemailer.createTransport({
      host: "smtp.meta.ua",
      port: 465,
      secure: true,
      auth: {
        user: META_EMAIL,
        pass: META_PASSWORD,
      },
    });
    await transporter.sendMail(message);
  } catch (error) {
    console.log(error);
  }
};

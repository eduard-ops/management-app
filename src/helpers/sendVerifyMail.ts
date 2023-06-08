import nodemailer from "nodemailer";

import { mailMessage } from "./mailMessage";

import config from "../config";

const {
  meta: { email: mail, password },
} = config;

// export const sendVerifyMail = async (token: string, email: string) => {
//   try {
//     const message = {
//       to: email,
//       from: mail,
//       subject: "E-mail verification",
//       html: mailMessage(token, email),
//     };
//     const transporter = nodemailer.createTransport({
//       host: "smtp.meta.ua",
//       port: 465,
//       secure: true,
//       auth: {
//         user: email,
//         pass: password,
//       },
//     });
//     await transporter.sendMail(message);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const sendVerifyMail = async (
  verificationToken: string,
  email: string
) => {
  try {
    const message = {
      from: mail,
      to: email,
      subject: "E-mail verification",
      html: mailMessage(verificationToken),
    };

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "e40a90180eb21a",
        pass: "0e4731a39c9c3d",
      },
    });

    await transport.sendMail(message);
  } catch (error) {
    console.error("app error:", error);
  }
};

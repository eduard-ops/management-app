import config from "../config";

const { host = "http://localhost:", port = 3000 } = config;

export const mailMessage = (verificationToken: string): string => {
  return `<!DOCTYPE html>
<html>
  <head>
    <metacharset="utf-8">
    <title>Verification code</title>
  </head>
  <body>
    <p>Hello</p>
    <p>Follow this link to confirm your registration</p>
    <a target="_blank" href="${
      host + port
    }/api/auth/verify/${verificationToken}">Confirm email</a>
  </body>
</html>`;
};

import moment from "moment";

export const generateCode = () => {
  const verificationCode = Math.floor(1000 + Math.random() * 9000);
  const verifyTime = moment().add(10, "minutes").unix();

  return { verificationCode, verifyTime };
};

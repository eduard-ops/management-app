import { Roles } from "../../enums";

export const getUsers = async (req, res) => {
  switch (req.user.role) {
    case Roles.ADMIN:
      res.json("все юзеры");
      break;
    case Roles.BOSS:
      res.json("босы и подченные");
      break;
    case Roles.USER:
      res.json("Только сам юзер");
      break;
    default:
      res.json("😥");
  }
};

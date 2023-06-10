export const addSubordinates = (data, bossId) => {
  return data
    .filter((node) => node.bossId === bossId)
    .map(({ _id, email, role, bossId }) => {
      return {
        _id,
        email,
        role,
        bossId,
        subordinates: addSubordinates(data, _id.toString()),
      };
    });
};

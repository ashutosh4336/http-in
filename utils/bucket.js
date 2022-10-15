export const check = async (key) => {
  try {
    return {
      allowed: true,
      remaining: 15,
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default function handler(req, res) {
  const {
    query: { code },
  } = req;

  res.status(200).json({ code });
}

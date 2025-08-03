export default async function handler(req, res) {
  const { username } = req.query;

  try {
    const response = await fetch(
      `https://gomtu.xyz/api/kaito/leaderboard-search?username=${username}`
    );
    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}

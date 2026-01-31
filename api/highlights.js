export default async function handler(req, res) {
  try {
    const r = await fetch(
      "https://www.scorebat.com/video-api/v3/feed/?token=MTY4OTdfMTcwNjY3Mzk3NF9mMDJiZTU3YmM0MzU0YWRiOTViYmI3ODU0YjE3Y2M1Yg=="
    );
    const data = await r.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "ScoreBat unavailable" });
  }
}

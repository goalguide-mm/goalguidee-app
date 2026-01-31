export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.status(200).json({
    highlights: [
      {
        title: "Man City vs Arsenal",
        competition: "Premier League",
        video:
          "https://www.youtube.com/embed?listType=search&list=Man%20City%20vs%20Arsenal%20Premier%20League%20official%20match%20highlights%20football"
      },
      {
        title: "Barcelona vs Real Madrid",
        competition: "La Liga",
        video:
          "https://www.youtube.com/embed?listType=search&list=Barcelona%20vs%20Real%20Madrid%20La%20Liga%20official%20match%20highlights%20football"
      }
    ]
  });
}

export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    highlights: [
      {
        title: "Man City vs Arsenal",
        competition: "Premier League",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      },
      {
        title: "Barcelona vs Real Madrid",
        competition: "La Liga",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      }
    ]
  });
}

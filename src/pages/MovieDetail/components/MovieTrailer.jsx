import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const MovieTrailer = ({ data, isLoading }) => {
  if (isLoading) return null;
  const { results } = data;

  const officialTrailer = results.find(
    (video) =>
      video.type === "Trailer" &&
      video.site === "YouTube" &&
      video.official === true
  );

  if (!officialTrailer) return null;

  return (
    <section id="trailer" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-white">Official Trailer</h2>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-xl shadow-black/30 border border-white/5">
          <LiteYouTubeEmbed
            id={officialTrailer.key}
            title={officialTrailer.name}
            playlist={false}
            adNetwork={false}
            poster="hqdefault"
          />
        </div>
      </div>
    </section>
  );
};

export default MovieTrailer;

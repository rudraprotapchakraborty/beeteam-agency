export default function Works() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <h2 className="text-center text-3xl font-semibold mb-10">
        Our Works
      </h2>

      <div className="grid grid-cols-3 gap-6">
        {/* MP4 Video */}
        <video
          className="w-full h-56 object-cover"
          src="https://beeteam.agency/wp-content/uploads/2025/02/srilanka-airlines.mp4?_=1"
          controls
        />

        {/* YouTube Videos */}
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/VpOd1qnnJHw"
          allowFullScreen
        />
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/nvwHhE5el6o"
          allowFullScreen
        />
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/UqMWgsWH7RU"
          allowFullScreen
        />
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/por5d5Nelog"
          allowFullScreen
        />
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/2LJWoKDKiqc"
          allowFullScreen
        />
        <iframe
          className="w-full h-56"
          src="https://www.youtube.com/embed/QTgY29dOPnQ"
          allowFullScreen
        />
      </div>
    </section>
  );
}

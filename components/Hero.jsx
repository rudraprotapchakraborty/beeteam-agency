export default function Vision() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-center text-3xl font-semibold text-red-700 mb-14">
        Our Vision
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Image */}
        <div className="w-full">
          <img
            src="https://beeteam.agency/wp-content/uploads/2025/02/6-1-2048x1152.png"
            alt="Our Vision"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="text-gray-600 leading-relaxed text-base">
          <p className="mb-6">
            Beeteam, a top-tier video production company in Bangladesh, is
            committed to creating exceptional content that truly represents
            your brand. We go beyond just making videos—we craft compelling
            stories that leave a lasting impact.
          </p>

          <p>
            Our team works closely with you to ensure our expertise enhances
            your brand’s message. By blending cutting-edge technology with
            creative artistry, we’ve built a reputation as the premier choice
            for video production in Bangladesh. Choose Beeteam and experience
            excellence in visual storytelling.
          </p>
        </div>
      </div>
    </section>
  );
}

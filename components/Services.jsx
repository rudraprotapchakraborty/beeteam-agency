export default function Services() {
  const services = [
    {
      title: "Full Length Film",
      subtitle: "Production",
      img: "https://beeteam.agency/wp-content/uploads/2025/02/Full-Length-Feature-Film-PRoduction-1228x1536.png",
    },
    {
      title: "Short Film",
      subtitle: "Production",
      img: "https://beeteam.agency/wp-content/uploads/2025/02/1-3-1228x1536.png",
    },
    {
      title: "Documentary",
      subtitle: "Production",
      img: "https://beeteam.agency/wp-content/uploads/2025/02/2-3-1228x1536.png",
    },
    {
      title: "Advertisement",
      subtitle: "Production",
      img: "https://beeteam.agency/wp-content/uploads/2025/02/3-2-1228x1536.png",
    },
    {
      title: "Promotional Events",
      subtitle: "& Campaigns",
      img: "https://beeteam.agency/wp-content/uploads/2025/02/6-2-1228x1536.png",
    },
    {
      title: "Video",
      subtitle: "Production",
      img: "https://beeteam.agency/wp-content/uploads/2025/02/7-1-1228x1536.png",
    },
  ];

  return (
    <section className="bg-white py-20">
      <h2 className="text-center text-3xl font-semibold text-red-700 mb-14">
        Major Services
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-6">
        {services.map((service, i) => (
          <div
            key={i}
            className="relative rounded-3xl overflow-hidden shadow-lg"
          >
            

            <div className="h-[320px] bg-gradient-to-b from-orange-300 to-yellow-400">
              <img
                src={service.img}
                alt={service.title}
                className="h-full w-full object-cover"
              />
            </div>

            
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center mt-16 text-gray-600 leading-relaxed px-6">
        <p className="mb-6">
          As a premier video production company in Bangladesh, Beeteam excels in
          crafting compelling visual content that captivates audiences. With
          years of experience, we’ve refined our skills, expanded our services,
          and served both local and global clients.
        </p>
        <p>
          Our dedicated team prioritizes understanding each client’s unique
          needs, ensuring top-tier content that aligns perfectly with their
          vision. Committed to exceptional service, we guarantee a seamless and
          collaborative production process. Trust Beeteam to transform your
          ideas into impactful visuals.
        </p>
      </div>
    </section>
  );
}

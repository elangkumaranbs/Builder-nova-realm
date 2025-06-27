export default function InstagramFeed() {
  const instagramImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/880033c890209fec3432da3da4b308a2510cccee?width=954",
      alt: "Instagram post 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f3f2677bb7ef8850c37031da0d8f3402101cf69?width=954",
      alt: "Instagram post 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/424d10910cfd294b280f1f2c29f61434c5f8e97d?width=954",
      alt: "Instagram post 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/95541320e9962213378c7d8de5f936d2f32b8f20?width=954",
      alt: "Instagram post 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/22c326670cc77b0813b54b06b65c817e2e0a27af?width=954",
      alt: "Instagram post 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/07cd2ed6279b8b663b2085fcd38df4e527215789?width=954",
      alt: "Instagram post 6",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d8fef86f0a7fed1c5282191423fcf09f66d333f?width=954",
      alt: "Instagram post 7",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/302ddaca6933d5da9c31409ecc855f25510a867f?width=954",
      alt: "Instagram post 8",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-[1920px] mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-black text-[20px] font-bold leading-6">
            Follow us on Instagram
          </h2>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {instagramImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden aspect-square"
            >
              <div className="absolute inset-0 bg-black bg-opacity-3 group-hover:bg-opacity-10 transition-all duration-300 z-10"></div>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-[#E52A56] text-white px-3 py-1.5 rounded-[5px] text-[12px] font-bold uppercase hover:bg-[#d1225a] transition-colors">
            Load more
          </button>
        </div>
      </div>
    </section>
  );
}

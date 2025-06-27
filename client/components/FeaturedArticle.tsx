export default function FeaturedArticle() {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-12 py-12">
        <div className="space-y-5">
          {/* Main Featured Article */}
          <div
            className="h-[400px] flex flex-col justify-center items-center relative bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://cdn.builder.io/api/v1/image/assets/TEMP/324e4b2943d93b09400fd3c95e0448a401b15518?width=2600')",
            }}
          >
            <div className="text-center text-white space-y-4">
              <div className="text-[14px] font-normal leading-4 uppercase">
                Featured Article
              </div>
              <h3 className="text-[30px] font-semibold leading-[39px] uppercase">
                Shimmer and Shine for Every Occasion
              </h3>
              <div className="pt-5">
                <button className="bg-[#ED1451] text-white px-6 py-2 rounded-[25px] text-[14px] font-semibold uppercase max-w-[200px] hover:bg-[#d1225a] transition-colors">
                  Read more
                </button>
              </div>
            </div>
          </div>

          {/* Secondary Article */}
          <div className="pb-5">
            <div className="border border-[rgba(164,162,163,0.30)] bg-white shadow-[0px_2px_6px_0px_rgba(0,0,0,0.05)] p-[1px] rounded-[5px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/766f69958210a7c01bee0abac36aabd078630da2?width=828"
                alt="Effortless Elegance: Why Palazzos Are a Wardrobe Must-Have"
                className="w-full h-[200px] object-cover"
              />
              <div className="text-center py-6 space-y-4">
                <h4 className="text-black text-[16px] font-semibold leading-[20.8px] uppercase px-2">
                  Effortless Elegance: Why Palazzos Are a Wardrobe Must-Have
                </h4>
                <button className="border-2 border-[#ED1451] text-[#ED1451] px-4 py-1 rounded-[25px] text-[17px] font-normal max-w-[120px] hover:bg-[#ED1451] hover:text-white transition-all">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

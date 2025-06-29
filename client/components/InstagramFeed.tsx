export default function InstagramFeed() {
  const socialPosts = [
    {
      content: "🌟 Customer Love: 'Best t-shirts ever! Perfect fit and quality!'",
      user: "@happycustomer1",
      likes: "💜 234",
    },
    {
      content: "📦 Just got my leggings order! Amazing quality and fast delivery",
      user: "@stylequeen",
      likes: "💜 156",
    },
    {
      content: "🎨 Love all the color options available for men's t-shirts!",
      user: "@fashionista",
      likes: "💜 189",
    },
    {
      content: "👕 Men's polo t-shirts are perfect fit and premium quality",
      user: "@fitguy",
      likes: "💜 98",
    },
    {
      content: "✨ Shimmer leggings are absolutely gorgeous! Highly recommend",
      user: "@sparkle_girl",
      likes: "💜 267",
    },
    {
      content: "🌙 Night wear collection is so comfortable and stylish!",
      user: "@comfy_sleeper",
      likes: "💜 143",
    },
    {
      content: "💪 Track pants are perfect for workouts and casual wear",
      user: "@fitness_lover",
      likes: "💜 201",
    },
    {
      content: "👗 Saree shapewear gives the perfect silhouette! Love it",
      user: "@traditional_style",
      likes: "💜 178",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-16">
      <div className="max-w-[1920px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#111] text-[36px] md:text-[45px] font-normal leading-[58.5px] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-[#555] text-[14px] font-normal leading-[26.25px] mb-6">
            Follow us on social media for latest updates and customer reviews
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200">
              Follow Us on Instagram
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200">
              Join Our Community
            </button>
          </div>
        </div>

        {/* Social Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#7C3AED] to-[#2563EB] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {post.user.charAt(1).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm font-medium mb-1">
                    {post.user}
                  </p>
                  <p className="text-gray-800 text-sm leading-relaxed mb-3">
                    {post.content}
                  </p>
                  <div className="text-xs text-gray-500">{post.likes}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] rounded-lg p-8 text-white">
            <h3 className="text-[24px] font-bold mb-2">Share Your Style!</h3>
            <p className="text-[16px] opacity-90 mb-4">
              Tag us in your photos wearing our products for a chance to be featured
            </p>
            <div className="flex justify-center space-x-4">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
                #YourBrandStyle
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
                #ComfortFashion
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function FeaturedArticle() {
  const articles = [
    {
      id: 1,
      title: "How to Style Your Leggings for Every Occasion",
      excerpt:
        "From casual days to workout sessions, discover the versatility of our legging collection.",
      category: "Style Guide",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "The Complete Guide to T-Shirt Fits",
      excerpt:
        "Find your perfect fit with our comprehensive guide to men's and women's t-shirt sizing.",
      category: "Sizing Guide",
      readTime: "3 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Fabric Care Tips for Long-Lasting Garments",
      excerpt:
        "Learn how to properly care for your garments to maintain quality and extend their lifespan.",
      category: "Care Tips",
      readTime: "4 min read",
      featured: false,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#111] text-[36px] md:text-[45px] font-normal leading-[58.5px] mb-4">
            Style & Care Guides
          </h2>
          <p className="text-[#555] text-[14px] font-normal leading-[26.25px]">
            Expert tips and guides to help you get the most out of your garments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#7C3AED] to-[#2563EB] rounded-xl p-8 text-white h-[400px] flex flex-col justify-center">
              <div className="space-y-4">
                <span className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                  {articles[0].category}
                </span>
                <h3 className="text-[28px] md:text-[32px] font-bold leading-tight">
                  {articles[0].title}
                </h3>
                <p className="text-[16px] opacity-90 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <button className="bg-white text-[#7C3AED] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Read More
                  </button>
                  <span className="text-sm opacity-75">
                    {articles[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            {articles.slice(1).map((article) => (
              <div
                key={article.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="space-y-3">
                  <span className="inline-block bg-[#7C3AED] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <h4 className="text-[18px] font-semibold text-gray-800 leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <button className="text-[#7C3AED] font-medium text-sm hover:underline">
                      Read More →
                    </button>
                    <span className="text-xs text-gray-500">
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-[#7C3AED] to-[#2563EB] rounded-lg p-6 text-white">
              <h4 className="text-[18px] font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm opacity-90 mb-4">
                Get style tips and exclusive offers delivered to your inbox
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded text-gray-800 text-sm"
                />
                <button className="w-full bg-white text-[#7C3AED] py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl mb-3">📏</div>
            <h5 className="font-semibold mb-2">Size Guide</h5>
            <p className="text-sm text-gray-600">
              Find your perfect fit with our detailed sizing charts
            </p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl mb-3">🚚</div>
            <h5 className="font-semibold mb-2">Shipping Info</h5>
            <p className="text-sm text-gray-600">
              Learn about our fast and reliable delivery options
            </p>
          </div>
          <div className="text-center p-6 border border-gray-200 rounded-lg">
            <div className="text-3xl mb-3">💬</div>
            <h5 className="font-semibold mb-2">Customer Care</h5>
            <p className="text-sm text-gray-600">
              Get help with orders, returns, and product questions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

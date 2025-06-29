import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PexelsImageGallery, {
  PexelsTshirtGallery,
  PexelsFashionGallery,
} from "../components/PexelsImageGallery";

const PexelsDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={0} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pexels Image Gallery Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dynamic fashion image loading using the Pexels API. Perfect for
            placeholder content during development.
          </p>
        </div>

        <div className="space-y-16">
          {/* General Fashion Images */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Fashion Collection
            </h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <PexelsFashionGallery imageCount={6} />
            </div>
          </section>

          {/* T-shirt Specific Images */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              T-Shirt Collection
            </h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <PexelsTshirtGallery imageCount={6} />
            </div>
          </section>

          {/* Custom Search */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Denim Collection
            </h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <PexelsImageGallery
                searchQuery="denim jeans fashion"
                imageCount={6}
              />
            </div>
          </section>

          {/* Different Grid Sizes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Women's Fashion (4 Images)
            </h2>
            <div className="bg-gray-50 p-8 rounded-xl">
              <PexelsImageGallery
                searchQuery="women fashion dress"
                imageCount={4}
              />
            </div>
          </section>
        </div>

        {/* Code Example */}
        <div className="mt-16 bg-gray-900 text-white p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Usage Examples</h3>
          <div className="space-y-4 text-sm font-mono">
            <div>
              <p className="text-gray-400">// Basic usage</p>
              <p className="text-green-400">
                &lt;PexelsImageGallery searchQuery="fashion clothes" imageCount=
                {6} /&gt;
              </p>
            </div>
            <div>
              <p className="text-gray-400">// T-shirt specific</p>
              <p className="text-green-400">
                &lt;PexelsTshirtGallery imageCount={4} /&gt;
              </p>
            </div>
            <div>
              <p className="text-gray-400">// General fashion</p>
              <p className="text-green-400">
                &lt;PexelsFashionGallery imageCount={8} /&gt;
              </p>
            </div>
            <div>
              <p className="text-gray-400">// Custom styling</p>
              <p className="text-green-400">
                &lt;PexelsImageGallery searchQuery="denim" imageCount={6}{" "}
                className="my-8" /&gt;
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Features Included
          </h3>
          <ul className="text-blue-800 space-y-1">
            <li>✅ Dynamic image fetching from Pexels API</li>
            <li>✅ Responsive grid layout (2 columns mobile, 3 desktop)</li>
            <li>✅ Loading states with skeleton placeholders</li>
            <li>✅ Error handling with user-friendly messages</li>
            <li>✅ Hover effects and photographer attribution</li>
            <li>✅ Image optimization with fallback sizes</li>
            <li>✅ Lazy loading for better performance</li>
            <li>✅ Customizable search terms and image counts</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PexelsDemo;

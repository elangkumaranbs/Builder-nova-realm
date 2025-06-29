import React, { useState, useEffect } from "react";

interface PexelsPhoto {
  id: number;
  url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  alt: string;
  photographer: string;
}

interface PexelsResponse {
  photos: PexelsPhoto[];
  total_results: number;
  page: number;
  per_page: number;
}

interface PexelsImageGalleryProps {
  searchQuery?: string;
  imageCount?: number;
  className?: string;
}

const PexelsImageGallery: React.FC<PexelsImageGalleryProps> = ({
  searchQuery = "fashion clothes",
  imageCount = 6,
  className = "",
}) => {
  const [images, setImages] = useState<PexelsPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const PEXELS_API_KEY =
    "XghJiopoCfIAY8Ns8pozSc2jA3INuy0blaTUzjIdCcUVZsS1JjjgT3cq";

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${encodeURIComponent(searchQuery)}&per_page=${imageCount}&orientation=portrait`,
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          },
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch images: ${response.status}`);
        }

        const data: PexelsResponse = await response.json();
        setImages(data.photos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load images");
        console.error("Error fetching Pexels images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, imageCount]);

  if (loading) {
    return (
      <div className={`w-full ${className}`}>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: imageCount }).map((_, index) => (
            <div
              key={index}
              className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"
            />
          ))}
        </div>
        <p className="text-center text-gray-500 mt-4">
          Loading fashion images...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`w-full ${className}`}>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-center">
            Error loading images: {error}
          </p>
          <p className="text-red-500 text-sm text-center mt-2">
            Please check your internet connection and try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={photo.src.medium}
              alt={photo.alt || "Fashion item"}
              className="w-full h-48 object-cover"
              style={{ width: "200px", height: "200px" }}
              loading="lazy"
              onError={(e) => {
                // Fallback to small size if medium fails
                const target = e.target as HTMLImageElement;
                if (target.src !== photo.src.small) {
                  target.src = photo.src.small;
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-2 left-2 right-2">
                <p className="text-white text-xs truncate">
                  Photo by {photo.photographer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-600 text-center">
            No images found for "{searchQuery}". Try a different search term.
          </p>
        </div>
      )}

      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          Images provided by{" "}
          <a
            href="https://www.pexels.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Pexels
          </a>
        </p>
      </div>
    </div>
  );
};

export default PexelsImageGallery;

// Alternative component for T-shirts specifically
export const PexelsTshirtGallery: React.FC<
  Omit<PexelsImageGalleryProps, "searchQuery">
> = (props) => {
  return <PexelsImageGallery {...props} searchQuery="tshirts fashion" />;
};

// Alternative component for general fashion
export const PexelsFashionGallery: React.FC<
  Omit<PexelsImageGalleryProps, "searchQuery">
> = (props) => {
  return <PexelsImageGallery {...props} searchQuery="fashion clothes" />;
};

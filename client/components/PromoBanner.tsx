export default function PromoBanner() {
  const promoMessages = [
    "Get 10% off on a minimum order value of ₹2999",
    "Get 5% or Max ₹150 off on prepaid orders.",
    "Free Shipping above order value ₹700.",
    "100% Free Cash on delivery",
  ];

  return (
    <div className="bg-[#ED1451] h-[46px] flex items-center justify-center overflow-hidden">
      <div className="flex animate-scroll">
        {promoMessages.concat(promoMessages).map((message, index) => (
          <div key={index} className="flex-shrink-0 px-8">
            <span className="text-white text-sm font-normal leading-[26.25px]">
              {message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

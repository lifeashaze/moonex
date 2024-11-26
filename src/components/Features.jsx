import ComparisonTable from "./ComparisonTable";

function Features() {
  const featuresData = [
    {
      id: 1,
      icon: "/Icons/Dollar.svg",
      title: "Cheapest TXs",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      id: 2,
      icon: "/Icons/Shield_Check.svg",
      title: "CerTIK",
      description:
        "We are Audited by Certik. CerTIK is the leading security-focused ranking platform to",
    },
    {
      id: 3,
      icon: "/Icons/Phone_Off.svg",
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets",
    },
    {
      id: 4,
      icon: "/Icons/CrossDex.svg",
      title: "CrossDex Support",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
  ];

  return (
    <section className="py-16 animate-fade-in relative">
      <div className="container mx-auto px-4">
        <div className="absolute top-[400px] left-[40%] -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-gradient-radial from-yellow-500/15 via-yellow-500/8 to-transparent blur-3xl pointer-events-none" />
        
        <ComparisonTable />

        <h2 className="text-4xl font-bold mb-12 text-center mt-20 text-white font-neue relative">
          Our <span className="text-yellow-500">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              style={{ animationDelay: `${index * 50}ms` }}
              className="p-8 md:backdrop-blur-sm bg-black/40 md:bg-white/5 transition-all duration-300 rounded-lg h-[280px] flex flex-col items-start border border-white/10 md:bg-gradient-to-br from-white/5 to-transparent hover:scale-[1.02] animate-fade-in"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300">
                <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

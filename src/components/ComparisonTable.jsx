/* eslint-disable react/prop-types */
 
function ComparisonTable() {
  const comparisonData = [
    { id: 1, feature: "1. Point no one" },
    { id: 2, feature: "2. Point no two this" },
    { id: 3, feature: "3. Point no two this" },
    { id: 4, feature: "4. Point no two this" },
    { id: 5, feature: "5. Point no two this" },
  ];

  return (
    <div className="overflow-x-auto animate-fade-in">
                <h2 className="text-4xl font-bold mb-12 text-white font-neue">
          Why <span className="text-yellow-500">MoonEX</span> ?
        </h2>
        
      <table className="w-full md:backdrop-blur-sm bg-black/40 md:bg-white/5 rounded-lg border border-gray-700">
        <thead>
          <tr>
            <th className="py-8 px-6 border-r border-gray-700 text-yellow-500 font-mono text-xl">Comparison</th>
            <th className="py-8 px-6 border-r border-gray-700 text-white text-center">
              <div className="flex items-center justify-center gap-2">
                <img src="/logo.png" alt="Moonex" className="h-8" />
                <img src="/logo-text.png" alt="Moonex" className="h-6" />
              </div>
            </th>
            <th className="py-8 px-6 text-white text-center">
              <img src="/UniSwap-Logo.png" alt="UniSwap" className="h-8 mx-auto" />
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((item) => (
            <tr key={item.id} className="text-white border-t border-gray-700 hover:bg-white/5 transition-colors duration-200">
              <td className="py-8 px-6 border-r border-gray-700">{item.feature}</td>
              <td className="py-8 px-6 border-r border-gray-700 text-center">
                <span className="text-[#B2FFAC] text-2xl font-bold animate-scale-in">✓</span>
              </td>
              <td className="py-8 px-6 text-center">
                <span className="text-[#FF5050] text-2xl font-bold animate-scale-in">×</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable; 
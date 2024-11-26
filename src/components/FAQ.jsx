import { useState } from 'react';

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "How do I get a Referral Code?",
      answer: "Your answer here",
    },
    {
      id: 2,
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      id: 3,
      question: "How do I get a Referral Code?",
      answer: "Your answer here",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-[200px] left-[-400px] w-[900px] h-[700px] rounded-full bg-gradient-radial from-yellow-500/15 via-yellow-500/8 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-[-400px] w-[900px] h-[700px] rounded-full bg-gradient-radial from-yellow-500/15 via-yellow-500/8 to-transparent blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto p-8 md:p-24 md:backdrop-blur-sm bg-black/40 md:bg-white/5 transition-transform duration-300 rounded-lg border border-white/10 md:bg-gradient-to-br from-white/5 to-transparent hover:scale-[1.01]">
          <h2 className="text-4xl font-bold mb-8 md:mb-16 text-center text-white font-neue">
            FA<span className="text-yellow-500">Qs</span>
          </h2>
          <div className="space-y-8">
            {faqData.map((faq) => (
              <div key={faq.id} className="border-b border-white/10 last:border-b-0 pb-8 last:pb-0">
                <div 
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="text-white text-xl font-semibold">{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    {openId === faq.id ? (
                      <span className="text-white transform -translate-y-[2px]">v</span>
                    ) : (
                      <span className="text-white">+</span>
                    )}
                  </div>
                </div>
                {openId === faq.id && (
                  <div className="text-gray-400 mt-4 leading-relaxed animate-slide-down">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

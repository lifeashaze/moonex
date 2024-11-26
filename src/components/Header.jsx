import { PrimaryButton, SecondaryButton } from './Buttons';

function Header() {
  return (
    <main className="min-h-[90vh] flex flex-col justify-center px-4 md:px-32 font-neue text-center md:text-left relative overflow-hidden">
      <div className="absolute top-96 right-[-50px] md:right-[-100px] w-[320px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-gradient-radial from-yellow-500/15 via-yellow-500/8 to-transparent blur-3xl pointer-events-none" />
      
      <h1 className="relative text-3xl md:text-[5rem] font-bold mb-4 text-white leading-[1.1]">
        Trusted Multi-Chain
        <br />
        <span className="bg-golden-gradient text-transparent bg-clip-text">DEX</span> Platform
      </h1>
      
      <p className="relative text-lg md:text-2xl text-gray-400 mb-8">
        Trade, earn and own crypto on all-in-one multi-chain DEX
      </p>

      <div className="relative flex flex-col md:flex-row gap-4 md:gap-6">
        <PrimaryButton className="w-full md:w-auto">
          Connect Wallet
        </PrimaryButton>
        <SecondaryButton className="w-full md:w-auto">
          Trade Crypto
        </SecondaryButton>
      </div>
    </main>
  );
}

export default Header;

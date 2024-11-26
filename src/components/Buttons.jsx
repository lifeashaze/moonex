const BUTTON_BASE_STYLES = "px-8 py-3 rounded-full transition-all duration-300 font-raleway font-bold";

// eslint-disable-next-line react/prop-types
export function PrimaryButton({ children}) {
  return (
    <button 
      className={`
        ${BUTTON_BASE_STYLES}
        bg-golden-gradient text-black
        hover:scale-105 hover:shadow-lg hover:shadow-secondary/20
      `}
    >
      {children}
    </button>
  );
}

// eslint-disable-next-line react/prop-types
export function SecondaryButton({ children }) {
  return (
    <button 
      className={`
        ${BUTTON_BASE_STYLES}
        border border-secondary text-secondary
        hover:bg-secondary hover:text-black hover:scale-105
        hover:shadow-lg hover:shadow-secondary/20
      `}
    >
      {children}
    </button>
  );
}
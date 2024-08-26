const GradientFull = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{
        backgroundImage: `
          radial-gradient(at 50% 50%, hsla(210, 78%, 56%, 1) 0px, transparent 50%), 
          radial-gradient(at 80% 20%, hsla(48, 98%, 62%, 1) 0px, transparent 50%), 
          radial-gradient(at 20% 80%, hsla(340, 85%, 66%, 1) 0px, transparent 50%), 
          radial-gradient(at 70% 70%, hsla(150, 80%, 60%, 1) 0px, transparent 50%), 
          radial-gradient(at 30% 30%, hsla(290, 75%, 70%, 1) 0px, transparent 50%),
          url('../assets/grid.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        filter: "blur(100px) saturate(150%)",
        opacity: 0.15,
      }}
    ></div>
  );
};

export default GradientFull;

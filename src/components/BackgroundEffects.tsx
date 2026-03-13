const BackgroundEffects = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    {/* Grid pattern */}
    <div className="absolute inset-0 bg-grid opacity-40" />
    
    {/* Floating gradient orbs */}
    <div className="orb orb-1" />
    <div className="orb orb-2" />
    <div className="orb orb-3" />
    
    {/* Vignette overlay */}
    <div className="absolute inset-0 vignette" />
  </div>
);

export default BackgroundEffects;

const Logo = () => {
  return (
    <div className="flex items-center gap-3 text-white font-bold text-xl mt-8  justify-center">
      <div className="relative w-11 h-11 flex justify-center border-4 rounded-full ">
        {/* Left road line */}
        <div className="absolute left-1 w-1 h-full bg-white rounded"></div>
        {/* Right road line */}
        <div className="absolute right-1 w-1 h-full bg-white rounded"></div>
        {/* Center dashed line */}
        <div className="absolute w-1 h-1 bg-white top-1"></div>
        <div className="absolute w-1 h-1 bg-white top-3"></div>
        <div className="absolute w-1 h-1 bg-white top-5"></div>
        <div className="absolute w-1 h-1 bg-white bottom-1"></div>
      </div>

      <span>Road Resolve</span>
    </div>
  );
};

export default Logo;

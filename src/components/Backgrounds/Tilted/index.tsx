export const TiltedBackground = () => {
  return (
    <div className="invisible absolute h-full w-full overflow-hidden lg:visible">
      <div className="absolute top-0 -z-10 h-full w-full bg-blue-500/80 backdrop-blur-sm lg:w-1/2 lg:rotate-3 lg:scale-110" />
    </div>
  );
};

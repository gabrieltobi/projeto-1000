export const BackgroundImage = () => {
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full overflow-hidden">
      <div className="h-full w-full bg-[url('/banner-bg.webp')] bg-cover bg-top brightness-50 contrast-50 grayscale saturate-50" />
    </div>
  );
};

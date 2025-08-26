const ContactImage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#cd7c2e]/30 z-10" />
      <img
        src="/images/zack-dev.jpeg"
        alt="Zack - Software Developer"
        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
      />
    </div>
  );
};

export default ContactImage;

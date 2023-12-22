type BasicImageType = {
  className?: string;
  src: string;
  alt?: string;
};

const BasicImage: React.FC<BasicImageType> = ({ className, src, alt }) => {
  return (
    <img
      src={src}
      alt={alt || "image"}
      className={`w-full h-full object-cover block rounded-lg select-none ${className}`}
    />
  );
};

export default BasicImage;

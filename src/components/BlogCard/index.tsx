import { getFormatDate } from "../../utils/date";

type BlogCardType = {
  title: string;
  date: Date;
  image?: string;
};

const BlogCard: React.FC<BlogCardType> = ({ title, date, image }) => {
  return (
    <div className="grid gap-1">
      {image ? (
        <img
          className="w-full h-[200px] transition rounded-xl object-cover border-4 border-solid hover:border-rose-400"
          src={image}
          alt={title ?? "image"}
        />
      ) : null}
      <div className="grid">
        <h3 className="text-lg font-bold text-gray-700 leading-1">{title}</h3>
        <p className="text-blue-600 leading-none">{getFormatDate(date)}</p>
      </div>
    </div>
  );
};

export default BlogCard;

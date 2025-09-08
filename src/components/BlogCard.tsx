import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  link: string;
  category: string;
}

const BlogCard = ({ title, excerpt, date, link, category }: BlogCardProps) => {
  return (
    <article className="blog-card p-6 mb-6">
      <div className="mb-3">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-soft text-primary rounded-full">
          {category}
        </span>
      </div>
      
      <h2 className="text-2xl font-semibold mb-3 text-foreground hover:text-primary transition-colors">
        <Link to={link}>{title}</Link>
      </h2>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <time className="text-sm text-muted-foreground">{date}</time>
        <Link 
          to={link}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-colors"
        >
          阅读更多
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
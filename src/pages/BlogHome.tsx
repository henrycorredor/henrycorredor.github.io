import BlogLayout from "@/components/BlogLayout";
import BlogCard from "@/components/BlogCard";
import profilePhoto from "@/assets/wangxue-profile.jpg";

const BlogHome = () => {
  const blogPosts = [
    {
      title: "云南之旅：追寻诗和远方",
      excerpt: "这次云南之旅让我重新认识了自然的美丽和生活的意义。从大理的古城到丽江的小桥流水，每一处风景都深深触动着我的心...",
      date: "2025年5月15日",
      link: "/yunnan",
      category: "旅行日记"
    },
    {
      title: "我的博客开发之路",
      excerpt: "作为一名钢琴老师，我决定学习前端开发并亲手打造这个博客。从零开始的编程之旅充满挑战，但每一行代码都让我感到成就感...",
      date: "2025年4月8日",
      link: "/blog-development",
      category: "技术分享"
    }
  ];

  return (
    <BlogLayout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="relative">
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <div className="cute-decoration">
                <img 
                  src={profilePhoto} 
                  alt="王雪的照片" 
                  className="profile-photo"
                />
              </div>
            </div>

            <h1 className="prose-chinese text-6xl font-bold mb-6">
              王雪的博客
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              你好！我是王雪，一名热爱音乐的钢琴教师，同时也在学习前端开发。
              在这里，我分享我的生活感悟、学习心得和成长历程。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center text-muted-foreground">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l7-7M9 19c-1.105 0-2-.895-2-2V6c0-1.105.895-2 2-2m0 0c0-1.105.895-2 2-2h2c1.105 0 2 .895 2 2m0 4c0 1.105.895 2 2 2h6c1.105 0 2-.895 2-2" />
                </svg>
                <span>钢琴教师</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-muted rounded-full"></div>
              <div className="flex items-center text-muted-foreground">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span>前端开发学习者</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="intro-cute mb-12 relative z-10">
          <h2 className="text-2xl font-semibold mb-4 text-primary text-center">关于我 💕</h2>
          <div className="prose-chinese text-muted-foreground relative z-10">
            <p className="text-center mb-4">
              我是王雪，一名专业的钢琴教师，有着多年的音乐教育经验。音乐给了我无尽的灵感和快乐，
              同时也教会了我耐心、专注和对美的追求。
            </p>
            <p className="text-center mb-4">
              最近，我开始学习前端开发，希望能够通过代码创造出美丽的数字世界。
              就像弹奏钢琴一样，编程也需要精确性和创造力的完美结合。
            </p>
            <p className="text-center">
              这个博客是我记录学习过程、分享生活点滴和表达内心想法的地方。
              希望我的故事能够启发到你，也欢迎你与我分享你的故事。✨
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">最新文章</h2>
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </section>
      </div>
    </BlogLayout>
  );
};

export default BlogHome;
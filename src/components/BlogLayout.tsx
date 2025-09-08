import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-lg bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-bold text-lg">
                雪
              </div>
              <span className="text-xl font-semibold text-foreground">王雪的博客</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                首页
              </Link>
              <Link 
                to="/yunnan" 
                className={`nav-link ${isActive('/yunnan') ? 'active' : ''}`}
              >
                云南之旅
              </Link>
              <Link 
                to="/blog-development" 
                className={`nav-link ${isActive('/blog-development') ? 'active' : ''}`}
              >
                博客开发记录
              </Link>
            </div>

            <div className="md:hidden">
              <button className="p-2 text-foreground">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {children}
      </main>

      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">© 2024 王雪的博客 - 记录生活，分享成长</p>
            <p className="text-sm">钢琴教师 | 前端开发学习者</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogLayout;
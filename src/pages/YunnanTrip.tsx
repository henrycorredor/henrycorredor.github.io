import BlogLayout from "@/components/BlogLayout";
import { Link } from "react-router-dom";

const YunnanTrip = () => {
  return (
    <BlogLayout>
      <div className="max-w-3xl mx-auto">
        <article className="blog-card p-8">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-4">
              <Link to="/" className="text-primary hover:text-primary/80 text-sm font-medium">
                ← 返回首页
              </Link>
            </div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-soft text-primary rounded-full">
                旅行日记
              </span>
            </div>
            <h1 className="prose-chinese">云南之旅：追寻诗和远方</h1>
            <div className="flex items-center text-muted-foreground text-sm mt-4">
              <time>2024年3月15日</time>
              <span className="mx-2">•</span>
              <span>王雪</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose-chinese">
            <p>
              三月的云南，春意盎然，正是最美的季节。这次旅行对我来说不仅仅是一次放松，
              更是一次心灵的洗礼。作为一名钢琴教师，平日里的生活总是围绕着琴键和乐谱，
              而这次云南之行让我重新发现了生活的另一种美好。
            </p>

            <h2>大理：风花雪月的浪漫</h2>
            <p>
              到达大理的第一天，我就被这里的宁静所打动。古城里的石板路在脚下发出清脆的声响，
              就像是在演奏一首古老的乐曲。我漫步在五华楼下，看着远处的苍山云雾缭绕，
              心中不禁涌起一种前所未有的平静。
            </p>
            <p>
              在洱海边的客栈住了几天，每天清晨被鸟儿的歌声唤醒。我会坐在湖边的小亭子里，
              看着太阳从山后缓缓升起，湖水被染成金黄色。那一刻，我想如果能把这种美景转化成音乐，
              该是怎样的旋律呢？
            </p>

            <h2>丽江：时光慢下来的地方</h2>
            <p>
              从大理到丽江的路上，车窗外的风景如画卷般展开。到达丽江古城时，
              正值黄昏时分，古城里的灯笼开始亮起，整个城市仿佛披上了一层梦幻的纱。
            </p>
            <p>
              在四方街的小茶馆里，我遇到了一位当地的老艺人。他弹奏着古琴，
              那悠扬的琴声与我熟悉的钢琴完全不同，却同样能够直击人心。
              我们聊了很久，他告诉我音乐是没有边界的，无论是什么乐器，
              只要用心演奏，都能传达内心的情感。
            </p>

            <h3>纳西古乐的启发</h3>
            <p>
              在丽江的那几天，我专门去听了几场纳西古乐的演出。
              那些古老的曲调中蕴含着深厚的文化底蕴，每一个音符都诉说着历史的故事。
              作为一名音乐教师，我深深被这种传统音乐的魅力所震撼。
            </p>
            <p>
              回到住处后，我尝试在钢琴上演奏那些古老的旋律。
              虽然乐器不同，但音乐的情感是相通的。我发现，
              把传统音乐与现代钢琴相结合，竟然产生了意想不到的美妙效果。
            </p>

            <h2>香格里拉：心灵的净土</h2>
            <p>
              旅程的最后一站是香格里拉。在这个海拔3000多米的高原上，
              我感受到了前所未有的宁静。普达措国家公园的湖水清澈见底，
              远山如黛，白云低垂，仿佛伸手就能触及。
            </p>
            <p>
              在松赞林寺，我听到了僧侣们的诵经声。那种庄严肃穆的氛围让我深受感动，
              我想这就是音乐最原始的力量吧——能够净化心灵，带来内心的平静。
            </p>

            <h2>旅行的收获</h2>
            <p>
              这次云南之旅让我收获颇丰。不仅看到了美丽的风景，更重要的是，
              我重新认识了音乐的意义。音乐不仅仅是技巧的展示，
              更是情感的表达和文化的传承。
            </p>
            <p>
              回到家后，我开始在钢琴课上融入一些云南民族音乐的元素，
              孩子们都很喜欢。我告诉他们，音乐是多元化的，
              我们要保持开放的心态，去接受和学习不同的音乐文化。
            </p>
            <p>
              同时，这次旅行也激发了我学习前端开发的热情。
              我想用代码创建一个音乐教育的平台，把传统音乐与现代技术相结合，
              让更多的人能够感受到音乐的魅力。
            </p>

            <h2>结语</h2>
            <p>
              云南之行结束了，但它给我带来的启发和思考会一直伴随着我。
              生活中处处都有美，关键是要有一双发现美的眼睛和一颗感受美的心。
              就像音乐一样，生活也需要我们用心去演奏。
            </p>
            <p>
              希望每个人都能找到属于自己的"诗和远方"，
              在忙碌的生活中保持对美好事物的向往和追求。
            </p>
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Link 
                to="/" 
                className="text-primary hover:text-primary/80 font-medium"
              >
                ← 返回首页
              </Link>
              <div className="text-sm text-muted-foreground">
                感谢你的阅读
              </div>
            </div>
          </footer>
        </article>
      </div>
    </BlogLayout>
  );
};

export default YunnanTrip;
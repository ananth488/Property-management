import Image from "next/image";

interface BlogPost {
  id: number;
  image: string;
  tag: string;
  title: string;
  date: string;
  author: string;
  readTime: string;
  content: string[];
}

interface ActiveBlogShowcaseProps {
  post: BlogPost;
}

export default function ActiveBlogShowcase({ post }: ActiveBlogShowcaseProps) {
  return (
    <article className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm p-6 sm:p-8 space-y-6 transition-all duration-300">
      {/* Featured Image */}
      <div className="relative w-full h-[280px] sm:h-[420px] rounded-xl overflow-hidden bg-slate-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Metadata Row */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
        <span className="bg-[#d96126]/10 text-[#d96126] px-2.5 py-1 rounded">
          {post.tag}
        </span>
        <span className="text-slate-400 font-normal">|</span>
        <span className="text-slate-500 font-medium">{post.date}</span>
        <span className="text-slate-400 font-normal">|</span>
        <span className="text-slate-500 font-medium">By {post.author}</span>
        <span className="text-slate-400 font-normal">|</span>
        <span className="text-slate-500 font-medium">{post.readTime}</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight tracking-tight">
        {post.title}
      </h1>

      {/* Article Body Content */}
      <div className="text-slate-600 leading-relaxed text-sm sm:text-base space-y-6 font-normal">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

import Image from "next/image";

interface BlogPost {
  id: number;
  image: string;
  tag: string;
  title: string;
  date: string;
}

interface BlogSidebarProps {
  posts: BlogPost[];
  activeId: number;
  onSelect: (id: number) => void;
}

export default function BlogSidebar({ posts, activeId, onSelect }: BlogSidebarProps) {
  return (
    <aside className="space-y-6">
      <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 tracking-tight">
        Recent Articles
      </h3>

      <div className="space-y-4">
        {posts.map((post) => {
          const isActive = post.id === activeId;
          return (
            <button
              key={post.id}
              onClick={() => onSelect(post.id)}
              className={`w-full text-left bg-white border rounded-xl p-4 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex gap-4 items-center focus:outline-none cursor-pointer group ${isActive
                ? "border-[#d96126] ring-1 ring-[#d96126]"
                : "border-slate-100"
                }`}
            >
              {/* Thumbnail Image */}
              <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Meta info */}
              <div className="min-w-0 flex-grow space-y-1">
                <span className="text-[10px] font-semibold text-[#d96126] uppercase tracking-wider block">
                  {post.tag}
                </span>
                <h4 className="text-sm font-bold text-slate-800 leading-snug line-clamp-2 group-hover:text-[#d96126] transition-colors">
                  {post.title}
                </h4>
                <span className="text-[10px] font-medium text-slate-400 block">
                  {post.date}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

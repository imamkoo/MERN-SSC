import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 pt-32 px-3 max-w-6xl mx-auto ">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Save Street Child Sidoarjo
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          {`"Empowering futures, one child at a time: Welcome to Save Street Child
          Sidoarjo Community!"`}
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>

      {/* Visi dan Misi untuk desktop view */}
      <div className="hidden lg:flex justify-center items-center gap-8 p-28">
        <div className="group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[560px] transition-all">
          <img
            src="https://images.unsplash.com/photo-1476950648868-16c7dca9499c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="visi"
            className="h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          />
          <div className="p-3 flex flex-col gap-2">
            <p className="text-2xl font-semibold line-clamp-2">Visi</p>
            <span className="italic text-sm">
              Menciptakan lingkungan inklusif dan berkelanjutan di Sidoarjo di
              mana setiap anak jalanan memiliki akses yang adil terhadap
              pendidikan, perlindungan, dan kesempatan untuk meraih potensi
              penuh mereka.
            </span>
          </div>
        </div>
        <div className="group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[560px] transition-all">
          <img
            src="https://images.unsplash.com/photo-1537655780520-1e392ead81f2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="misi"
            className="h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          />
          <div className="p-3 flex flex-col gap-2">
            <p className="text-2xl font-semibold line-clamp-2">Misi</p>
            <span className="italic text-sm">
              <ol className="ml-4 list-decimal list-outside">
                <li>
                  <p>
                    Memberdayakan anak jalanan dengan keterampilan dan
                    pengetahuan yang dibutuhkan untuk mengubah hidup mereka
                    secara positif.
                  </p>
                </li>
                <li>
                  <p>
                    Menyediakan perlindungan dan bantuan yang komprehensif bagi
                    anak jalanan, termasuk akses ke layanan kesehatan dan
                    sosial.
                  </p>
                </li>
                <li>
                  <p>
                    Menggalang dukungan masyarakat dan kolaborasi lintas sektor
                    untuk memperjuangkan hak-hak anak jalanan dan membangun
                    lingkungan yang ramah anak.
                  </p>
                </li>
              </ol>
            </span>
          </div>
        </div>
      </div>

      {/* Visi dan Misi untuk mobile view */}
      <div className="lg:hidden py-24">
        <div className="relative border border-teal-500 hover:border-2 mb-6 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1476950648868-16c7dca9499c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="visi"
            className="h-[260px] w-full  object-cover transition-all duration-300 z-20"
          />
          <div className="p-3 flex flex-col gap-2">
            <p className="text-2xl font-semibold line-clamp-2">Visi</p>
            <span className="italic text-sm">
              Menciptakan lingkungan inklusif dan berkelanjutan di Sidoarjo di
              mana setiap anak jalanan memiliki akses yang adil terhadap
              pendidikan, perlindungan, dan kesempatan untuk meraih potensi
              penuh mereka.
            </span>
          </div>
        </div>
        <div className="relative border border-teal-500 hover:border-2 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1537655780520-1e392ead81f2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="misi"
            className="h-[260px] w-full  object-cover transition-all duration-300 z-20"
          />
          <div className="p-3 flex flex-col gap-2">
            <p className="text-2xl font-semibold line-clamp-2">Misi</p>
            <span className="italic text-sm">
              <ol className="ml-4 list-decimal list-outside">
                <li>
                  <p>
                    Memberdayakan anak jalanan dengan keterampilan dan
                    pengetahuan yang dibutuhkan untuk mengubah hidup mereka
                    secara positif.
                  </p>
                </li>
                <li>
                  <p>
                    Menyediakan perlindungan dan bantuan yang komprehensif bagi
                    anak jalanan, termasuk akses ke layanan kesehatan dan
                    sosial.
                  </p>
                </li>
                <li>
                  <p>
                    Menggalang dukungan masyarakat dan kolaborasi lintas sektor
                    untuk memperjuangkan hak-hak anak jalanan dan membangun
                    lingkungan yang ramah anak.
                  </p>
                </li>
              </ol>
            </span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-8xl mx-auto p-14 flex flex-col gap-14 py-14">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

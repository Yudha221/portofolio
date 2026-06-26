import { useState } from "react";
import { listProyek, listVideo } from "../data";

const Project = () => {
  const [tab, setTab] = useState("project");

  return (
    <div id="proyek" className="mt-20 py-10">
      <h1 className="text-4xl font-bold mb-2 text-center">Proyek</h1>

      <p className="text-center opacity-50 mb-10">
        Berikut ini beberapa proyek yang sudah saya buat.
      </p>

      {/* TAB BUTTON */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setTab("project")}
          className={`px-6 py-2 rounded-lg ${
            tab === "project"
              ? "bg-violet-700 text-white"
              : "bg-zinc-700 text-white"
          }`}
        >
          Project
        </button>

        <button
          onClick={() => setTab("video")}
          className={`px-6 py-2 rounded-lg ${
            tab === "video"
              ? "bg-violet-700 text-white"
              : "bg-zinc-700 text-white"
          }`}
        >
          Video
        </button>
      </div>

      {/* CONTENT */}
      {tab === "project" ? <ProjectList /> : <VideoList />}
    </div>
  );
};

export default Project;

/* ===================== */
/* LIST PROJECT */
/* ===================== */

const ProjectList = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      {listProyek.map((proyek, index) => (
        <div
          key={proyek.id}
          className="p-4 bg-zinc-800 rounded-lg hover:-translate-y-2 transition duration-300"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay={index * 100}
          data-aos-once="true"
        >
          <img
            src={proyek.gambar}
            alt={proyek.nama}
            className="w-full aspect-video object-cover rounded-md hover:scale-105 transition duration-500"
          />

          <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>

          <p className="text-base/loose mb-4">{proyek.desk}</p>

          <div className="flex flex-wrap gap-2">
            {proyek.tools.map((tool, index) => (
              <p
                key={index}
                className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md text-sm font-semibold"
              >
                {tool}
              </p>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href="#"
              className="bg-violet-700 p-2 rounded-lg block hover:bg-violet-600"
            >
              Lihat Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ===================== */
/* LIST VIDEO */
/* ===================== */

const VideoList = () => {
  const [playing, setPlaying] = useState(null);

  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
      {listVideo.map((video) => (
        <div
          key={video.id}
          className="relative rounded-xl overflow-hidden group cursor-pointer bg-zinc-900"
        >
          {playing === video.id ? (
            <video
              controls
              autoPlay
              preload="metadata"
              className="w-full aspect-video"
            >
              <source src={video.video} type="video/mp4" />
            </video>
          ) : (
            <div className="relative" onClick={() => setPlaying(video.id)}>
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full aspect-video object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition">
                  <i className="ri-play-fill text-black text-2xl"></i>
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition">
                <h2 className="text-white font-semibold text-lg">
                  {video.title}
                </h2>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

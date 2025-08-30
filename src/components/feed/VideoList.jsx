import VideoCard from "./VideoCard";


export default function VideoList({videos}) {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar">
      {videos.map((video, idx) => (
        <div key={idx} className="snap-start">
          <VideoCard {...video} />
        </div>
      ))}
    </div>
  );
}

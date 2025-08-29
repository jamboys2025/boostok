import VideoCard from "./VideoCard";

export const videos = [
  {
    src: "/videos/video1.mp4",
    username: "user1",
    caption: "Check out this awesome clip!",
  },
  {
    src: "/videos/video2.mp4",
    username: "user2",
    caption: "Another fun moment 🎵",
  },
];


export default function VideoList() {
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

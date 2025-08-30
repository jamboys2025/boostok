import VideoCard from "./VideoCard";

// export const videos = [
//   {
//     src: "https://cdn.pixabay.com/video/2025/08/12/296958_tiny.mp4",
//     username: "user1",
//     caption: "Check out this awesome clip!",
//   },
//   {
//     src: "https://cdn.pixabay.com/video/2024/05/06/210905_tiny.mp4",
//     username: "user2",
//     caption: "Another fun moment 🎵",
//   },
//   {
//     src: "https://cdn.pixabay.com/video/2024/08/30/228847_tiny.mp4",
//     username: "user1",
//     caption: "Check out this awesome clip!",
//   },
//   {
//     src: "https://cdn.pixabay.com/video/2024/11/09/240570_tiny.mp4",
//     username: "user1",
//     caption: "Check out this awesome clip!",
//   },
//   {
//     src: "https://cdn.pixabay.com/video/2023/02/09/149899-797491517_tiny.mp4",
//     username: "user1",
//     caption: "Check out this awesome clip!",
//   },
// ];
  

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

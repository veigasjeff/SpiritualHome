import VideoGrid from "./LiveBroadcast";

const LatestVideos = ({ videos = [] }) => {
  return (
    <div>
      <h2>Latest Spiritual Videos</h2>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default LatestVideos;

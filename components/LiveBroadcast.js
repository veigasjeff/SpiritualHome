import { useEffect, useRef, useState } from 'react';
import youtubeStyles from '../styles/Youtube.module.css'; // Rename the import for YouTube styles
import homeStyles from '../styles/Home.module.css'; // Rename the import for Home styles

const VideoGrid = () => {
  const [videos, setVideos] = useState([]);
  const [playerReady, setPlayerReady] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');
  const playerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const loadYouTubeAPI = () => {
    const onYouTubeIframeAPIReady = () => setPlayerReady(true);
    if (typeof window !== "undefined" && typeof YT === "undefined") {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }
  };

  useEffect(() => {
    loadYouTubeAPI();
  }, []);

  useEffect(() => {
    if (playerReady && currentVideoId) {
      if (currentVideoId.length === 11) {
        playerRef.current = new window.YT.Player("youtube-player", {
          width: "100%",
          height: "100%",
          videoId: currentVideoId,
          playerVars: {
            autoplay: 1,
            mute: 0,
            enablejsapi: 1,
            modestbranding: 1,
          },
          events: {
            onReady: (event) => {
              event.target.playVideo();
            },
          },
        });
      }
    }
  }, [playerReady, currentVideoId]);

  const openModal = (videoId) => {
    setCurrentVideoId(videoId);
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setCurrentVideoId("");

    // Stop YouTube video if it's playing
    if (playerRef.current && playerRef.current.stopVideo) {
      playerRef.current.stopVideo(); // Stop the video for YouTube
    }
  };

  useEffect(() => {
    // Fetch video data from broadcast.json
    const fetchData = async () => {
      const response = await fetch('../live-broadcast.json'); // Update with the correct path
      const data = await response.json();
      setVideos(data.articles); // Update state
    };
    
    fetchData();
  }, []); // Fetch data on mount

  return (
    <main className={homeStyles.main}> {/* Change styles here as needed */}
      <div className={youtubeStyles.container}>
        <div className={youtubeStyles.header}>
          <div className={youtubeStyles.logo}>Live Broadcast. </div>
        </div>
        <div className={youtubeStyles.main}>
          <div className={youtubeStyles.grid}>
            {videos.length > 0 ? (
              videos.map((video, index) => (
                <div className={youtubeStyles.card} key={index} onClick={() => openModal(video.videoitem[0])}>
                  <img src={video.image} alt={video.title} className={youtubeStyles.videoThumbnail}  style={{
                        cursor: "pointer",
                        boxShadow: "0 0 10px 0 #000", // Shadow effect
                        filter:
                          "contrast(1.1) saturate(1.1) brightness(1.0) hue-rotate(0deg)", // Image filter effects
                      }}/>
                  <h3 className={youtubeStyles.title}>{video.title}</h3>
                  <p className={youtubeStyles.channel}>{video.badge}</p>
              
                </div>
              ))
            ) : (
              <p>No videos available.</p>
            )}
          </div>

          {/* Modal for video player */}
          {isModalOpen && (
            <div className={youtubeStyles.modal} onClick={closeModal}>
              <div className={youtubeStyles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={youtubeStyles.close} onClick={closeModal}>Close</button>
                <div id="youtube-player" className={youtubeStyles.player} style={{ display: playerReady ? 'block' : 'none',  filter:
                 "contrast(1.1) saturate(1.2) brightness(1.3) hue-rotate(0deg)" }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default VideoGrid;

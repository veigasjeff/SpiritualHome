import { useEffect, useRef } from 'react';
import { Howl } from 'howler';

const BackgroundAudio = ({ audioSrc, isVideoPlaying }) => {
  const soundRef = useRef(null);

  useEffect(() => {
    // Create a new Howl instance
    soundRef.current = new Howl({
      src: [audioSrc],
      loop: true,
      volume: 0.3, // Set initial volume
    });

    // Play the audio when the component mounts
    soundRef.current.play();

    // Cleanup function to stop the audio when the component unmounts
    return () => {
      soundRef.current.stop();
    };
  }, [audioSrc]);

  useEffect(() => {
    if (isVideoPlaying) {
      // Stop audio when a video starts playing
      soundRef.current.stop();
    } else {
      // Resume audio if not already playing
      if (!soundRef.current.playing()) {
        soundRef.current.play();
      }
    }
  }, [isVideoPlaying]);

  return null; // No UI needed for background audio
};

export default BackgroundAudio;

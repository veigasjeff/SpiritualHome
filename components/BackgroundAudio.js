// import { useEffect, useRef } from 'react';
// import { Howl } from 'howler';

// const BackgroundAudio = ({ audioSrc, isVideoPlaying }) => {
//   const soundRef = useRef(null);

//   useEffect(() => {
//     // Create a new Howl instance
//     soundRef.current = new Howl({
//       src: [audioSrc],
//       loop: true,
//       volume: 0.5, // Set initial volume
//     });

//     // Play the audio when the component mounts
//     soundRef.current.play();

//     // Cleanup function to stop the audio when the component unmounts
//     return () => {
//       soundRef.current.stop();
//     };
//   }, [audioSrc]);

//   useEffect(() => {
//     if (isVideoPlaying) {
//       // Stop audio when a video starts playing
//       soundRef.current.stop();
//     } else {
//       // Resume audio if not already playing
//       if (!soundRef.current.playing()) {
//         soundRef.current.play();
//       }
//     }
//   }, [isVideoPlaying]);

//   return null; // No UI needed for background audio
// };

// export default BackgroundAudio;

import { useEffect, useRef } from 'react';
import { Howl } from 'howler';

const BackgroundAudio = ({ audioSrc, isVideoPlaying }) => {
  const soundRef = useRef(null);
  const isPlayingRef = useRef(false); // To keep track of audio play state

  useEffect(() => {
    // Initialize Howl instance
    soundRef.current = new Howl({
      src: [audioSrc],
      loop: true,
      volume: 0.5,
    });

    const playAudioOnInteraction = () => {
      if (!isPlayingRef.current) {
        soundRef.current.play();
        isPlayingRef.current = true; // Set audio as playing
        window.removeEventListener('click', playAudioOnInteraction);
        window.removeEventListener('touchstart', playAudioOnInteraction);
      }
    };

    // Add event listeners to handle user interaction for mobile devices
    window.addEventListener('click', playAudioOnInteraction);
    window.addEventListener('touchstart', playAudioOnInteraction);

    // Cleanup function to stop audio when the component unmounts
    return () => {
      soundRef.current.stop();
      window.removeEventListener('click', playAudioOnInteraction);
      window.removeEventListener('touchstart', playAudioOnInteraction);
    };
  }, [audioSrc]);

  useEffect(() => {
    if (isVideoPlaying) {
      soundRef.current.stop();
      isPlayingRef.current = false;
    } else if (!soundRef.current.playing()) {
      soundRef.current.play();
      isPlayingRef.current = true;
    }
  }, [isVideoPlaying]);

  return null; // No UI needed for background audio
};

export default BackgroundAudio;

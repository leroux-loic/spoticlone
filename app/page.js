'use client';

import styles from "./globals.css"
import {useRef, useState} from "react";

export default function Home() {


    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(null)

    const handlePlayOrPause = () => {
        if (isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }
        else {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

  return (
      <>
        <audio
            ref={audioRef}
            src="unFichierSon.mp3"
            className="nativeAudioPlayer"
            controls
        ></audio>
          {isPlaying ? (
              <p onClick={() => handlePlayOrPause()}>pause</p>
          ) : (
              <p onClick={() => handlePlayOrPause()}>play</p>
          )}
      </>
  )
}

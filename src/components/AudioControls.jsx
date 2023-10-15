import { useState, useEffect, useRef } from "react";
import Play from "@/icons/Play";
import Pause from "@/icons/Pause";
import Random from "@/icons/Random";
import Repeat from "@/icons/Repeat";
import Previous from "@/icons/Previous";
import Next from "@/icons/Next";
import { Slider } from "@/components/Slider";
import { formatTime } from "@/lib/utils";

const AudioControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef();

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audioRef.current.src = "/music/1/01.mp3";
    audioRef.current.volume = 0.1;
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [audioRef.current]);

  const duration = audioRef.current?.duration;

  return (
    <div className="grow flex flex-col gap-2">
      <div className="flex justify-center items-center gap-2">
        <button className="grid place-items-center w-8 h-8 text-[#a7a7a7] hover:text-white">
          <Random />
        </button>
        <button className="grid place-items-center w-8 h-8 text-[#a7a7a7] hover:text-white">
          <Previous />
        </button>
        <button
          className="grid place-items-center w-8 h-8 bg-white rounded-full text-black hover:scale-105"
          onClick={handlePlayPause}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <button className="grid place-items-center w-8 h-8 text-[#a7a7a7] hover:text-white">
          <Next />
        </button>
        <button className="grid place-items-center w-8 h-8 text-[#a7a7a7] hover:text-white">
          <Repeat />
        </button>
      </div>

      <div className="flex gap-2 text-xs">
        <span className="w-10 text-right text-[#a7a7a7]">
          {formatTime(currentTime)}
        </span>

        <Slider
          value={[currentTime]}
          max={audioRef.current?.duration ?? 0}
          min={0}
          onValueChange={(value) => {
            const [newCurrentTime] = value;
            audioRef.current.currentTime = newCurrentTime;
          }}
        />

        <span className="w-10 text-[#a7a7a7]">
          {duration ? formatTime(duration) : "0:00"}
        </span>
      </div>

      <audio ref={audioRef} />
    </div>
  );
};

export default AudioControls;

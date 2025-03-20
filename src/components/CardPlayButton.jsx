import PlayIcon from "../icons/PlayCard";
import PauseIcon from "../icons/PauseCard";
// import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id, size = "small" }) {
  // const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
  //   usePlayerStore((state) => state);

  // const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id;

  // const handleClick = () => {
  //   if (isPlayingPlaylist) {
  //     setIsPlaying(false);
  //     return;
  //   }

  //   fetch(`/api/get-info-playlist.json?id=${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const { songs, playlist } = data;

  //       setIsPlaying(true);
  //       setCurrentMusic({ songs, playlist, song: songs[0] });
  //     });
  // };

  const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";

  return (
    <button
      // onClick={handleClick}
      className="grid place-items-center w-12 h-12 rounded-full bg-[#1ed760] shadow-md transition duration-150 hover:bg-[#1fdf64] hover:scale-105"
    >
      {/* {isPlayingPlaylist ? (
        <PauseIcon className={iconClassName} /> */}
      {/* ) : ( */}
      <PlayIcon className={"text-black"} />
      {/* )} */}
    </button>
  );
}

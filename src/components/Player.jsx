import PlayerCurrentSong from "./PlayerCurrentSong";
import AudioControls from "./AudioControls";

const Player = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-[72px]">
      <PlayerCurrentSong />

      <AudioControls />

      <div className="w-[30%] min-w-[180px]"></div>
    </div>
  );
};

export default Player;

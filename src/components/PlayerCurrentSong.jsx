import Like from "../icons/Like";

const PlayerCurrentSong = ({ image, title = "Lorem ipsum", artists = ["Lorem", "ipsum"] }) => {
  return (
    <div className="w-[30%] min-w-[180px] pl-2">
      <div className="flex items-center gap-4 relative">
        <picture className="aspect-square w-14 h-14 rounded-md ">
          <img class="object-cover w-full h-full" src={image} alt={title} />
        </picture>

        <div className="flex flex-col">
          <h3 className="text-sm truncate">{title}</h3>
          <span className="text-xs text-[#a7a7a7] truncate">{artists?.join(", ")}</span>
        </div>

        <button
          className="grid place-items-center w-8 h-8 text-[#a7a7a7] hover:text-white"
          aria-label="Like"
        >
          <Like />
        </button>
      </div>
    </div>
  );
};

export default PlayerCurrentSong;

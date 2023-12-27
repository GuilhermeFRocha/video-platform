import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { UseCurrentLesson, next } from "../store/slices/player";

export function Video() {
  const dispatch = useDispatch();

  function handleNext() {
    dispatch(next());
  }

  const { currentLesson } = UseCurrentLesson();

  return (
    <div className="flex-1">
      <div className="w-full bg-zinc-950 aspect-video ">
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handleNext}
          url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
        />
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  // fetch trailer and update the store with trailer video data
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => {
      return video.name === "Official Trailer";
    });

    const officialTrailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(officialTrailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieTrailer();
  }, []);
};

export default useMovieTrailer;

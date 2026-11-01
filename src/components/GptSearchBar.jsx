import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import ai from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  // seach movie in TMDB
  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const query = searchText?.current?.value;
    console.log(query);
    if (!query) return;
    //Make an API call to google ai and get movie results
    try {
      const gptResults = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Suggest movies for: ${query}`,
        config: {
          // Keeps the layout logic separate from the user query
          systemInstruction:
            "Act as a movie recommendation system. Suggest exactly 5 movies based on the user's query. " +
            "Return only a comma-seperated list of movie titles. Do not include point, numbering, or extra texts." +
            "Example: The Matrix, Fight Club, La La Land, The Dark Knight, La Haine",
        },
      });

      console.log(gptResults?.candidates[0]?.content?.parts[0]);
      const gptMovieList =
        gptResults?.candidates[0]?.content?.parts[0].text.split(",");

      console.log(gptMovieList);

      // for each movie I will seatch in TMDB API, returns me promise array of 5 promises
      const promiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie));

      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(
        addGptMovieResult({
          movieNames: gptMovieList,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.error("API Errr:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="col-span-9 p-4 m-4 bg-white rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        ></input>
        <button
          className="col-span-3 py-2 px-4 m-4 cursor-pointer bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

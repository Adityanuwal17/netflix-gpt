import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="col-span-9 p-4 m-4 bg-white rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        ></input>
        <button className="col-span-3 py-2 px-4 m-4 cursor-pointer bg-red-700 text-white rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

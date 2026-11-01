import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT search Button
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="flex flex-col md:flex-row justify-between w-full z-30 fixed px-8 py-2 bg-linear-to-b from-black">
      <img className="w-54 mx-auto md:mx-0" alt="logo" src={LOGO}></img>
      {user && (
        <div className="flex p-2 m-2 justify-between">
          <h1 className="text-white -mx-3 my-4 md:p-3 md:m-2">
            Hi {user.displayName} 🍿
          </h1>
          {showGptSearch && (
            <select
              className="bg-gray-900 p-0 ml-3 md:p-2 md:m-2 text-white cursor-pointer rounded-lg hover:bg-gray-600"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-2 m-2 text-white bg-purple-800 rounded-lg cursor-pointer hover:bg-purple-800/80"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img
            className="hidden md:block w-12 h-12 m-2"
            alt="usericon"
            src={USER_AVATAR}
          ></img>
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer p-2 m-2 bg-blue-500 rounded-lg hover:bg-blue-500/80"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between w-full z-10 absolute px-8 py-2 bg-linear-to-b from-black">
      <img
        className="w-54 "
        alt="logo"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-10-13/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      ></img>
      {user && (
        <div className="flex p-2 m-2">
          <h1 className="p-2 m-2 font-bold">{user.displayName}</h1>
          <img
            className="w-12 h-12 m-2"
            alt="usericon"
            src="https://occ-0-2464-3646.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABT5SI5IKcC5ZF8b_CYciBz7VZDbaBNXPEGfKPCwC8AIG15lEsNcT2sdpuODkfre-fWwVDrM4IoWtof7EzBr50N1p9KK_nas.png?r=1d4"
          ></img>
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer p-2 m-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

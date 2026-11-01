export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-10-13/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-2464-3646.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABT5SI5IKcC5ZF8b_CYciBz7VZDbaBNXPEGfKPCwC8AIG15lEsNcT2sdpuODkfre-fWwVDrM4IoWtof7EzBr50N1p9KK_nas.png?r=1d4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w300/";

export const BG_LOGO =
  "https://assets.nflxext.com/ffe/siteui/vlv3/29195c81-5ebb-453e-82e9-d3a50737dfb3/web/IN-en-20261026-TRIFECTA-perspective_ef561213-292c-4768-aef0-c1db800e385e_large.jpg";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

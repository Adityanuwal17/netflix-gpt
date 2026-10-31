# Netflix Gpt

- create vite project
- configured tailwind css
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validation
- Use Ref Hook
- Firebase Setup
- Deploying app to production
- create SignUp User Account in Firebase
- Implement Sign In user api
- create Redux Store with userSlice
- Implemented sign out
- Update profile api
- BugFix: Sign up user displayName update
- BugFix: if the is not logged in redirect /browse to login page and vice versa
- Unsubscribes to the onAuthStateChange callback once component unmounts
- Add hardcoded values to the contants file
- Register for TMDB, edit profile, create your app, and get the api key
- fetch from TMDB now playing movies list API
- Custom hook for now Playing Movies
- Create MovieSlice
- update Stpore with movies Data
- Fetch Data for trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube Vide and make it autoplay and mute
- Tailwind Classes to the make the Main container look cool
- Build Secondary Component

# Features

- Login/SignIn Page

  - Sign In / Sign Up Form
  - redirect to Browse Page once logged in

- Browse Page (only comes after authentication)

  - Header
  - Main movie

    - Trailer in background
    - movie title and description, play button

  - movie suggestions
    - moviesList \* N categories

- Netflix GPT
  - Search bar
  - Movie Suggestions

# Plan Browse Page

- Main Container

  - Video background
  - video title

- Secondary Container

  - Movies List \* n
    - Each list has movie cards \* n

- Video Background

  - fetch trailer with API call from movie Id
  - from the json, get the key from the trailer
  - paste on youtube, and click on share and get the embed iframe code
  - take care of camel casing in jsx for attributes so react can read them

- Secondary Container

  - Movie List - Pupular
    - Movie Cards \* n
  - Movie List - trending
  - Movie List - Now Playing
  - Movie List - Horror
    etc..

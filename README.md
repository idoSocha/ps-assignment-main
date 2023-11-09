The 2 errors I´ve detected were:
1. in the App.js file --> inside the MovieDetails component --> the onFavoriteToggle={handleFavorite} prop was missing, I noticed it was declared in the code but it was never read/used (when opening the application an error is being thrown)
2. in MovieDetails.js file --> I added the isArray method because the "some" method is an array method, and since the array at first is empty this line of code will never run.

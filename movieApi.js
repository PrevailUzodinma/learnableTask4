class Movie {
  constructor(title, genre, available) {
    this.title = title;
    this.genre = genre;
    this.available = available;
  }
}

class MovieApi {
  constructor() {
    this.movies = [];
    this.rentedmovies = [];
  }

  addMovie(title, genre) {
    const newMovie = new Movie(title, genre, true);
    this.movies.push(newMovie);
    console.log(`"${title}" has been added to the library.`);
  }

  listMovies() {
    console.log("\n Movies in the library:");
    this.movies.forEach((movie) => {
      console.log(
        `* ${movie.title} (${movie.genre}) - ${
          movie.available ? "Available" : "Not Available"
        }`
      );
    });
  }

  rentMovie(title) {
    let movie = this.movies.find((movie) => movie.title === title);

    if (movie) {
      if (movie.available) {
        movie.available = false;
        this.rentedmovies.push(movie);
        console.log(`\n You've just rented "${title}". Enjoy your movie!`);
      } else {
        console.log(`\n Oops! Sorry, "${title}" is currently unavailable.`);
      }
    } else {
      console.log(`\n "${title}" not found in the library.`);
    }
  }

  getmovieByGenre(genre) {
    let genreMovies = [];
    for (let movie of this.movies) {
      if (movie.genre === genre) {
        genreMovies.push(movie);
      }
    }
    if (genreMovies.length > 0) {
      console.log(`\nMovies in "${genre}" genre:`);
      for (let movie of genreMovies) {
      console.log(
        `* ${movie.title} (${movie.genre}) - ${
          movie.available ? "Available" : "Not Available"
        }`
      );
    }
    } else {
      console.log(`\nMovies in "${genre}" genre NOT found in the library.`);
    }
  }
}

// Let's test the Movie API
const admin = new MovieApi();

admin.addMovie("Wish", "Animation");
admin.addMovie("Aquaman", "Action");
admin.addMovie("The Kitchen", "Drama");
admin.addMovie("The Man", "Drama");
admin.addMovie("Lift", "Thriller");

admin.getmovieByGenre("pear");

//admin.rentMovie("The Kitchen");
//admin.rentMovie("The Marvels");

//console.log(admin.rentedmovies)
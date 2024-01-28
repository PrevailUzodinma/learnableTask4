class Movie {
  constructor(title, genre, available) {
    this.title = title;
    this.genre = genre;
    this.available = available;
  }

  rentMovie() {
    // check if the movie is available
    if (this.available) {
      //if it is available, set it to unavaible since it is to be rented
      this.available = false;
      console.log(`You've just rented "${this.title}". Enjoy your movie!`);
    } else {
      console.log(`Oops! sorry, "${this.title}" is currently unavailable.`);
    }
  }
}

class MovieApi {
  constructor() {
    this.movies = [];
  }

  addMovie(title, genre) {
    const newMovie = new Movie(title, genre, true);
    this.movies.push(newMovie);
    console.log(`"${title}" has been added to the library.`);
  }

  listMovies() {
    console.log("Movies in the library:");
    this.movies.forEach((movie) => {
      console.log(
        `- ${movie.title} (${movie.genre}) - ${
          movie.available ? "Available" : "Not Available"
        }`
      );
    });
  }
}

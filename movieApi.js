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
  
  rentMovie(title) {
    const movie = this.movies.find(movie => movie.title === title);

    if (movie) {
      if (movie.available) {
        movie.available = false;
        console.log(`You've just rented "${title}". Enjoy your movie!`);
      } else {
        console.log(`Oops! Sorry, "${title}" is currently unavailable.`);
      }
    } else {
      console.log(`"${title}" not found in the library.`);
    }
  }
}

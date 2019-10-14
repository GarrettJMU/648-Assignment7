//STEP 1
let favMovies = ["I", "like", "too", "many", "movies"]
console.log(favMovies[1])

//STEP 2
let movies = new Array(5)
movies[0] = 'I'
movies[1] = 'like'
movies[2] = 'too'
movies[3] = 'many'
movies[4] = 'movies'
console.log(movies[0])

//STEP 3
let movies = new Array(5)
movies[0] = 'I'
movies[1] = 'like'
movies[2] = 'too'
movies[3] = 'many'
movies[4] = 'movies'
movies.splice(3, 0, "new")
console.log(movies.length)

//STEP 4
let movies = ["I", "like", "too", "many", "movies"]
delete movies[0]
console.log(movies)

//STEP 5
let movies = ["I", "like", "too", "many", "movies", "really", "do"]
let i
for (i = 0; i < movies.length; i++) {
  console.log(movies[i])
}

//STEP 6
let movies = ["I", "like", "too", "many", "movies", "really", "do"]
for (var index in movies) {
  console.log(movies[index])
}

//STEP 7
let movies = ["d", "g", "f", "b", "e", "c", "a"]
for (var index in movies.sort()) {
  console.log(movies[index])
}

//STEP 8
let movies = ["I", "like", "too", "many", "movies", "really", "do"]
let leastFavMovies = ["some", "really", "bad"]
console.log("Movies I like:\n \n")
movies.forEach((movie)=>{console.log(movie)})
console.log("\nMovies I regret watching:\n \n")
leastFavMovies.forEach((movie)=>{console.log(movie)})

//STEP 9
let movies = ["I", "like", "too", "many", "movies", "really", "do"]
let leastFavMovies = ["some", "really", "bad"]

movies = movies.concat(leastFavMovies)
movies.sort().reverse().forEach((movie)=>{console.log(movie)})

//STEP 10
let movies = ["I", "like", "too", "many", "movies", "really", "do"]
let leastFavMovies = ["some", "really", "bad"]

movies = movies.concat(leastFavMovies)
console.log(movies.sort().reverse().pop())

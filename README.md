# CV-USA-CSV-SUV-FS

The Full Stack version of our app!


### Workflow

You'll be working entirely in `main.js`, unless you want to make helper functions for the stretch goal (in which case you could still keep them in `main.js`, but we'd recommend putting them in separate files instead).


### Guidelines

* Again, don't stray from `main.js`, outside of stretch goal helper functions.
* Try not to re-do any logic. You have the helper functions to make it happen, so all you need to do is import them with `require`, get the user's input and the file, feed it to the right function, and print out the return value. You know... front end stuff!
* Side note: grabbing that file is really the back end's thing, and we only moved it to this assignment to limit how much work you had to do and separate the setting-up-functions part from the making-it-into-an-app portion of the assignment. Pulling in data from a specific source is always a back end's job!


### Steps

* Create a main.js.
* You'll need to require a couple files to pull in our data and make sure it's in the right format. The first is `fs`, which you can `require` just like any file you made, except you don't give it a path of any kind; just the string 'fs'. This is something you'll do more and more when working with `node`: pull in someone else's code. Usually you'll have to also install it with `npm install`, but `node` has the `fs` module built right in!
* Get the user's input. Although you can design the interface any way you want, we recommend setting the first thing the user types in (`process.argv[2]`) to be a command, like 'new' for new cases on a day and 'total' for total cases on a day. The second thing they type in should most likely be the date they want to retrieve the case data for. Good idea to store these values somewhere, and log them as well to make sure you're getting them right! Note that if you're struggling with this one, you can do the next step first.
* Next, you'll want to pull in the data from your CSV. You can use `fs.readFileSync`, passing it two things: the path to your `.csv` file, and the string 'utf8' so it knows what character set to read the file as. That will return a huge CSV string, which you can feed to your `getRows` function (importing it first!) to get back a 2D array we can use. Neat!
* Now we can get cracking by examining the command the user typed in to figure out which helper functions to call. An `if/else` chain works great here, though `switch` does too if you want to, er, switch it up. Make sure to create a `default`/`else` case for if the command isn't what we want it to be, and tell the user how to use the app! You can always add more options to this "menu" as you add them as actual options your code can handle.
* The two basic commands we want the user to use are `total` and `new` (the names are up to you, it's YOUR interface), which will enable the user to type in a date and see the total or new cases on that day. Note that for each of these, you should only have to use ONE function's return value. You'll be feeding some function the date and the 2D array; which respective function, for each of these two commands, will take in those arguments and give you the information you seek?


### Stretch Goals

* Add backend functions that can take in TWO dates and give you how the total or new case numbers have changed between them. (Don't worry about ups and downs in between, just the difference between cases between those two days.)
* Add access to the above features to the front end. Add options to your `if/else`/`switch` front end logic to print the results, take in an extra argument with `process.argv` for the second date, and, finally, add it to your "menu" that shows up when they type an invalid command.
* Add another feature! There's plenty you could do with this data. Have fun with it!

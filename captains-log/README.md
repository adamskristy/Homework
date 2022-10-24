# Practice What You Learned The Captain's Log

Learning Objectives
- Full CRUD app with a mongo database
Links to an external site.Prerequisites
- JavaScript
- Express / Node
- Mongo / Mongoose


Every great captain, whether on the waters or in the skies, keeps a daily log.

Let's build the perfect Captain's Log App for our extraordinary captains.

There are many ways to get started building an app. This lab follows a specific order for two reasons:

- to align with the content of lecture
- to give you an order to guide you to create small bits of functionality and test each one before moving on to the next part

If you finish lab early consider:

- adding some CSS and practice styling your app
- try working with the date object! Try to make it look human readable in HTML. It's tricky! A HintLinks to an external site.
- try working through the next section of the lab before it is covered in lecture - see what you can figure out
- **SUPER BONUS** - Once you finish this whole lab, add a second model for comments, it should have the name of the person who wrote it, and some text for the comment (maybe time stamps?). This model should 'belong' to the post, the data should be related in some way. Do your own research on how to set up a `one-to-many` relationship (one post can have many comments, one comment only belongs to one post), in MongoDB. Use Mongo Documents, Google.

## Set up
Let's keep track of our Restful Routes as we build out our app. Copy/paste this table into a fresh file, open an excel/sheets spreadsheet or draw on a piece of paper. Feel free to add more columns and notes to help you put it all together.

Index, New and Create has been completed for you.

| # | Action  | URL       | Verb   | jsx view filename | mongoose                |
|---|---------|-----------|--------|-------------------|-------------------------|
| 1 | Index   | /logs/    | GET    | index.jsx         | Log.find()              |
| 2 | New     | /logs/new | GET    | new.jsx           |                         |
| 3 | Destroy | /:id      | DELETE |                   | Log.findByIdAndDelete() |
| 4 | Update  | /:id      | PUT    |                   | Log.findByIdAndUpdate() |
| 5 | Create  | /logs     | POST   | none              | Log.create(req.body)    |
| 6 | Edit    | /:id/edit | GET    | edit.jsx          | Log.findById()          |
| 7 | Show    | /:id      | GET    | show.jsx          | Log.findById()          |

### Bonuses
1. The captain wants to keep track of eating habits: make a new set of routes in a new file in your controller folder called foodlogs
2. build out the 7 restful routes for foodlogs, include a new model with whatever properties make sense
3. make a seed file and seed it
4. have your update route redirect to the show page of the log that was edited
5. research `res.redirect('back')`
6. create a seed file and seed your database
7. work on your css, make this Captain's Log look awesome!
8. if you have timestamps, figure out how to edit/display the edited date
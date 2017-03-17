#Quoting Dojo Checklist

1. Install dependencies
 +'bodyparser'
 +'expresss'
 +'ejs'
 +'mongoose'

2. create VIEWS w/ EJS files
  +'Welcome.ejs'
  +'Quotes.ejs'

3. Set up the server.js
  +'set my views'
  +'build routes'
  +'GET '/' => render to Welcome.ejs'
  +'POST '/quotes' => will post and redirect to the Quotes.ejs'
  +'Get '/quotes' => will render to quotes.ejs showing quotes'

4. Database
  +'remember to start nodemon server.js before starting 'mongo' in terminal
  +'Run 'sudo mongod' to start server
  +'connect to express server'
  +'Create userSchema(db)'
  +'Create quoteSchema(db)'

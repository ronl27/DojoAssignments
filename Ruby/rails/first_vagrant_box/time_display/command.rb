# Time Display

# Create a controller called Times and have one method called main. When the user goes to localhost:3000 main should render a view and pass that view a variable containing the current date and time and display that date and time on the view page.

# When you're working with a web app, it's important that you understand how the data can be passed from the controller to the view.

##############################

# in rails c

# start project
rails new time_display

#create a time controller
rails g controller Times

#cd into views and create a main.html
apps/views/times/main.html.erb

#in the controller
def main
  # Get the current date time and save it to a instance variable
  @time = Time.new
end

#in the routes
get "times#main"

# in the html file
<div class="container">
  <div class="time_controller">
    <h1>The Current Time and Date:</h1>
    <div class="time_info well well-small">
      <!-- Shows the month  -->
      <h3><%= @time.strftime("%b %d, %Y")%></h3>
      <!-- Shows the time  -->
      <h3><%= @time.strftime("%I : %M %p")%></h3>
    </div>
  </div>
</div>

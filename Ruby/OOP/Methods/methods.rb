### INSTANCE METHOD ###
# instance methods are just regular methods that are defined inside the Class Definition

class User
  # creating instance methos that get and set the first_name and last_name attributes
  attr_accessor :first_name, :last_name
  def initialize(f_name, l_name)
    @first_name = f_name
    @last_name = l_name
  end

  def full_name
    puts "I am #{@first_name} #{@last_name}"
  end

  def say_hello
    puts "Aloha"
  end
end
r = User.new("Ryan", "Bautista")
r.full_name
r.say_hello

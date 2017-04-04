### INSTANCE METHOD ###
# instance methods are just regular methods that are defined inside the Class Definition

# class User
#   # creating instance methos that get and set the first_name and last_name attributes
#   attr_accessor :first_name, :last_name
#
#   def initialize(f_name, l_name) #method 1
#     @first_name = f_name
#     @last_name = l_name
#   end
#
#   def full_name #method2
#     puts "I am #{@first_name} #{@last_name}"
#   end
#
#   def say_hello #method3
#     puts "Aloha"
#   end
# end
# r = User.new("Ryan", "Bautista")
# r.full_name
# r.say_hello


### CLASS METHODS ####
#class methods are prefixedd by SELF followed by a period. these methods are executed only at the CLASS level(which is User) and are not available to the instances

class User
  attr_accessor :first_name, :last_name

  def initialize(f_name, l_name) #method 1
    @first_name = f_name
    @last_name = l_name
  end

  def full_name #method2
    puts "I am #{@first_name} #{@last_name}"
  end

  def say_hello #method3
    puts "Aloha"
  end

  def self.foo
    puts "You have reached the Class method"
  end
end
u = User.new("Ryan", "Bautista")
u.full_name
u.say_hello

# using
# u.foo # => NoMethodError: undefined method 'foo'

# must use the actual class name to reference the self.foo
User.foo # => "You have reached the Class method"

# class User
# end
# #Instances of User
# user1 = User.new
# user2 = User.new
# user1 == user2

#### ADDING ATTRIBUTES TO USER ####

# class User
#   @first_name
# end
# user1 = User.new
# user2 = User.new
# user1.first_name = "Matz"
### Returns an error as we need to create a GETTER and SETTERS to manipulate the Instances

### SETTER ###
# class User
#   def first_name=(val)
#     @first_name = val
#   end
# end
# user1 = User.new
# user2 = User.new
# user1.first_name = "Matz"
#
# puts user1.inspect #returns to us a readable representation of our object


### GETTER ###
# class User
#   def first_name
#     # return @first_name #NO need to use the RETURN key word as Ruby will return whatever was evaluated last.
#     # or
#     @first_name #cleaner version of the return method
#   end
# end

### ADDING ANOTHER ATTRIBUTE TO A CLASS ###

# class User
#   attr_reader :last_name
#   attr_writer :last_name
#   def first_name
#     @first_name
#     @lastname
#   end
# end

### INITIALIZE ###

### RATHER THAN USING THIS VERSION....####
# class User
#   attr_accessor :first_name, :last_name #using attr_accessor will save time. Rather than using attr_reader or attr_writer.
# end
# ron = User.new
# ron.first_name = "Ronnel"
# ron.last_name = "Bautista"
#
# puts ron.inspect

### WE CAN INITIALIZE THIS WAY ###
class User
  attr_accessor :first_name, :last_name
  def initialize(f_name, l_name)
    @first_name = f_name
    @last_name = l_name
  end
end
ryan = User.new("Ryan", "Bautista")

puts ryan.inspect

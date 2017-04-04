# def new_user user = {first_name: "first", last_name: "last"}
#   puts "Welcome to our site, #{user[:first_name]} #{user[:last_name]}!"
# end
#
# our_user = {first_name: "Ronnel", last_name:"Bautista"}
# # new_user
# new_user our_user
#
# def new_user first_name: "first", last_name:"last"
#   puts "Welcome to our site, #{first_name} #{last_name}!"
# end
#
# our_user = {first_name: "Ryan", last_name:"Bautista"}
# # new_user
# new_user our_user
#
# # we can still use regular parameters with keyword arugments
# def new_user greeting = "Welcome", first_name:"first", last_name:"last"
#   puts "#{greeting}, #{first_name} #{last_name}"
# end
#
# our_user = {first_name: "Steph", last_name: "Curry"}
# new_user our_user
# # or
# new_user "Hello", our_user

############## ASSIGNMENT ###################

# .delete(key) deletes the key-value pair and returns the value from hsh whose key is equal to key.

ruby_hash = {first_name: "Coding", last_name: "Dojo"}
ruby_hash.delete :first_name
puts ruby_hash

# .empty? => returns true if hash contains no key-value pairs
ruby_hash = {}
ruby_hash.empty?
puts ruby_hash

# .has_key?(key) returns true if given key is present
# ruby_hash = {first_name:"Ronnel", last_name:"Bautista"}
# ruby_hash.has_key? first_name: # => will return true
# ruby_hash.has_key? "first_name" # => will return false

# .has_key?(value) returns true if given value is present for some key

h = {first_name:"Ronnel", last_name: "Bautista"}
h.has_value? "Ronnel"
h.has_value? "Bautista"

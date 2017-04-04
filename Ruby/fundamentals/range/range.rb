# Challenge: Useful Methods
# Go ahead and try the following methods:
#
# .include?(value) => true or false
# .last => returns the last object in range
# .max => returns the maximum value in range
# .min => returns the minimum value in range

x = (1..30)

puts "Class name: #{x.class}"
puts "It does include 20!" if x.include?(40)
puts "Yes the last object is 30!" if x.last(30)
puts x.max
puts x.min

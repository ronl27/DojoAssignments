# def test
#   puts "You are in a method"
#   yield
#   puts "Welcome back to the method"
# end
# test{ puts "This is the BLOCK"}

# def test
#   yield(10)
#   puts "You're in the method test"
#   yield(100)
# end
# test {|i| puts "You're in block #{i}"}

def square(num)
  puts "num is #{num}"
  puts "yield(num) has a value of #{yield(num)}"
end

square(5) {|i| i*i}

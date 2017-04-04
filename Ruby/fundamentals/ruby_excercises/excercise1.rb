=begin
puts "hello, my name is Ronnel"

BEGIN{
  puts "This is the beginning block"
}

END{
  puts "This is the end of the block"
}

x = 5; y = 3; z = x * y

puts z

first = 'Ronnel'
last = 'Bautista'

puts 'My name is %s %s' %first, last

x = "Ronnel Bautista"

puts x[4,8]
puts "Ruby!" * 2
puts "chunky" << "bacon"
puts "Chunky"[2..3]

puts "ruBy".capitalize
puts "team".include("i")


number = 15
if number % 3 == 0 && number % 5 == 0
puts "FizzBuzz"
elsif number % 3 == 0
puts "Fizz"
elsif number % 5 == 0
puts "Buzz"
end

age = 41
unless age < 21
puts "Welcome to the party, cuz"
else
puts "Not today youngin"
end

#function
def say_hello name1 = "Ronnel", name2 = "Ryan"
"Hello, #{name1} and #{name2}"
end
puts say_hello "Ronnel" , "Ryan"

#WHILE loop
i = 0
num = 10
while i < num do
puts "Inside the loop i = #{i}"
i += 1
break if i == 5
end


#for loop
for i in 0..20
puts "Value of local variable #{i}"
break if i == 10
end

#for loop with NEXT. Next skips the variable indicated. in this case it skipped 10
for i in 0..20
next if i == 10
puts "Value of local variable #{i}"
end
=end

#blocks
person = {name:"Ronnel" occupation:"Student" age: 31}

#to get key value pairs from the dictionary (person)
person.each

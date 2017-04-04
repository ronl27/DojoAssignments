# Consider the following:

a = {first_name: "Ronnel", last_name: "Bautista"}
b = {first_name: "Ryan", last_name: "Bautista"}
c = {first_name: "Rolando", last_name: "Bautista"}
d = {first_name: "Grace", last_name: "Bautista"}
e = {first_name: "Imay", last_name: "Bautista"}
names = [a, b, c, d, e]

puts "Array length is #{names.length}"
names.each do |name|
  puts "The name is #{name [:first_name]} #{name [:last_name]}"
end

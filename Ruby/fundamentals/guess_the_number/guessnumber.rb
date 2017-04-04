def guess_number guess
  number = 25

if guess == number
  return "You got it!"
elsif guess > number
  return "You guessed to high"
else
  return "You guessed to low"
  end
end

puts guess_number 25
puts guess_number 100
puts guess_number 10

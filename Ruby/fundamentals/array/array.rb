#Challenge
# Try the following methods at least once either on a separate Ruby file or on irb.
#
# .at or .fetch .delete .reverse .length .sort .slice .shuffle .join .insert values_at() -> returns an array with values specified in the param
# e.g. a = %w{cat dog bear}; puts a.values_at(1,2).join(' and ') #=> "dog and bear"


a = ["Transformers", "He-Man", "G.I Joe", "Thundercats", "Voltron"]
b = [1, 10, 20, 15, 30, 6, 55, 40, 50, 10]

# puts a.shuffle.join(", "" ")

# puts b.fetch(3)

# puts a.at(4)

# puts a.delete(3)

# puts a.reverse
# puts b.reverse

# puts a.length
# puts b.length

# puts b.sort.join(", "" ")
# puts a.join(", "" ")

# puts a.values_at(3,4).join(' and ')

# puts a.insert(5, "TMNT")

puts a.fetch(4)

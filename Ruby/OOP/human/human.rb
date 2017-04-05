class Human
  attr_accessor :stength, :intelligence, :stealh, :health
  def initialize
    @strentgth = 3
    @intelligence = 3
    @stealth = 3
    @health = 100
  end

  def attack(obj)
    if obj.class.ancestors.include?(Human)
      obj.health -= 10
      true
    else
      false
    end
  end
end

h = Human.new
h2 = Human.new

puts h.attack(h2)
puts h.attack("This is no human")
puts h2.health
puts h.attack(h2)
puts h2.health

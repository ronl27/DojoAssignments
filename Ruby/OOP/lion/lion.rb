# Now, create another class called Lion that inherits from Mammal. Hint: super



# (Yes, this is a flying lion)
# Have the default health be 170
# Add a new method called fly, which when invoked, decreases the health by 10.
# Add a new method called attack_town, which when invoked, decreases the health by 50.
# Add a new method called eat_humans, which when invoked, increases the health by 20.
# Have the Lion attack_town three times, eat_humans twice, fly twice, and have it display its health.
# When the Lion's display_health method is called have it say 'This is a lion` before it displays the default information (make sure you still call the parent's display_health function).

require_relative "mammal"

class Lion < Mammal

  def fly
    @health -= 10
    self
  end

  def attack_town
    @health -= 50
    self
  end

  def eat_humans
    @health += 20
    self
  end

  def display_health
    puts "Yes that was a flying lion"
    super # super must be used to retrieve the display_health information in the mammal.rb
  end
end

lion = Lion.new
lion.attack_town.attack_town.attack_town.eat_humans.eat_humans.fly.fly.eat_humans.display_health

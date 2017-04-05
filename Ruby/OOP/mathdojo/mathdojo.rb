# Make challenge1 work. You will need to create two methods: add and subtract. These two functions should take at least 1 argument.


# Make challenge2 work. Modify your methods so that arrays can also be passed as arguments.

class Mathdojo
  attr_accessor :sum

  def initialize
    @sum = 0
  end

  def add(*numbers)
    @sum += numbers.flatten.reduce(0, :+)
    self
  end

  def subtract(*numbers)
    @sum -= numbers.flatten.reduce(0, :+)
    self
  end
end

challenege1 = Mathdojo.new.add(3).add(5, 4).subtract(2).sum
puts challenege1
challenge2 = Mathdojo.new.add(1).add([1,1], [1,1]).subtract([2,3], [4,2]).sum
puts challenge2

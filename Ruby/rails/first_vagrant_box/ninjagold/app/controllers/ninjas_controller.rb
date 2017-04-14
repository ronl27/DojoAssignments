class NinjasController < ApplicationController
  def index
    if !session[:gold]
      session[:gold] = 0
      session[:activities] = []
    end

    @gold = session[:gold]
    @activities = session[:activities]
  end

  def farm
    current_time = Time.now
    amount = rand(10..20)
    session[:gold] += amount

    object = {won: true, sentence:"You won #{amount} from the Farm!(#{current_time.strftime('%Y/%m/%d %I:%M %P')})"}
    session[:activities].push(object)

    redirect_to '/'
  end

  def cave
    current_time = Time.now
    amount = rand(5..10)
    session[:gold] += amount

    object = {won: true, sentence:"You won #{amount} from the Cave!(#{current_time.strftime('%Y/%m/%d %I:%M %P')})"}
    session[:activities].push(object)
    redirect_to '/'
  end

  def house
    current_time = Time.now
    amount = rand(2..5)
    session[:gold] += amount

    object = {won: true, sentence:"You won #{amount} from the House!(#{current_time.strftime('%Y/%m/%d %I:%M %P')})"}
    session[:activities].push(object)
    redirect_to '/'
  end

  def casino
    current_time = Time.now
    amount = rand(0..50)
    gamble = rand(1..2)

    if gamble == 1

      session[:gold] += amount
      object = {won: true, sentence:"Woot Woot! You won #{amount} from that Gamble!(#{current_time.strftime('%Y/%m/%d %I:%M %P')})"}

      session[:activities].push(object)
    else

      session[:gold] -= amount
      object = {won: false, sentence:"Ouch, you lost #{amount} on that Gamble!(#{current_time.strftime('%Y/%m/%d %I:%M %P')})"}
      session[:activities].push(object)
    end

    redirect_to '/'
  end
end

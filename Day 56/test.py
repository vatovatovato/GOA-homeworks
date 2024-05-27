#1
def liters(time):
    return int(time * 0.5) #time(კონკრეტული რიცხვი) გამრავლდება 0.5 ზე და მიღებული შედეგი იქნება დალეული წყლის რაოდენობა
     #int - ამრგვალებს რიცხვს მაგრამ დაყავს იქამდე საიდანაც არის ასევთვათ, თუ არი 3,9 დააბრუნებს 3, თუ არის 4.1 დააბრუმნებს 4
print(liters(3))
print(liters(6.7))
print(liters(11.8))

#2
def paperwork(n, m):
    if(n < 0 or m < 0):  #tu n > 0 ze an m > 0 - ze gamova 0, sxva shemtxvevashi ki else.
        return 0
    else:
        return n * m
    
#3
def grow(x):
    result = 1 #ამ ცვლადს ვქმნი იმისათვის რომ მასივებზე გავამრავლო
    for num in x:
        result *= num
    return result

print(grow([1, 2, 3, 4]))


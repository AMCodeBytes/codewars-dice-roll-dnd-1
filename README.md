# Codewars Dice Roll D&D #1
 
 #Dice roll - D&D #1 In this D&D kata series you will be creating some helpers for playing a game of D&D. In this kata we will be creating a Dice class which we will use to roll our dice and decide our fate.

You must create the Dice class which will intialized with a seed, this seed may be a number or a string, this must be used to generate random numbers

The Dice class will have one exposed method called roll, this method will be called with a string. The string will indicate what roll has been made (examples below) you must then return a random number that is within the bounds specified in the input and the tests.

##roll examples d1 => 1 the d stands for dice and the 1 is the range of numbers from 1 that are possible.. e.g. with a dice of 1 and a range out of 1 the possible numbers is 1

1 <= d5 => 5 the possible range of a d5 is 1 to 5.

2d6 if a number appears before a d this indicates the number of dice to be rolled then added together so the value range of a 2d6 is 2 to 12, this is because 2 d6 dice will be rolled.

d5+5 or d5-5 if a dice roll is followed by a + or - operator then you must either add or subtract the following number from the roll

2d5+2d1 you can also add multiple dice rolls together.

https://www.codewars.com/kata/571c128782661cdcca000932/train/javascript

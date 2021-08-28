                                     Working with abstraction
1.Card Suit
Create an enumeration type that has as its constants the four suits of a deck of playing cards 
(CLUBS, DIAMONDS, HEARTS, SPADES). Iterate over the values of the enumeration type and print all ordinal values and names. 

Input	Output
Card Suits	Card Suits:
Ordinal value: 0; Name value: CLUBS
Ordinal value: 1; Name value: DIAMONDS
Ordinal value: 2; Name value: HEARTS
Ordinal value: 3; Name value: SPADES
-------------------------------------------------------------------------------------------------
2.	Card Rank 
Create an enumeration type that has as its constants the fourteen ranks of a deck of playing cards 
(ACE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING).
 Iterate over the values of the enumeration type and print all ordinal values and names. 

 Input	Output
Card Ranks	Card Ranks:
Ordinal value: 0; Name value: ACE
Ordinal value: 1; Name value: TWO
Ordinal value: 2; Name value: THREE
Ordinal value: 3; Name value: FOUR
Ordinal value: 4; Name value: FIVE
Ordinal value: 5; Name value: SIX
Ordinal value: 6; Name value: SEVEN
Ordinal value: 7; Name value: EIGHT
Ordinal value: 8; Name value: NINE
Ordinal value: 9; Name value: TEN
Ordinal value: 10; Name value: JACK
Ordinal value: 11; Name value: QUEEN
Ordinal value: 12; Name value: KING
-------------------------------------------------------------------------------------------------
3.Cards with Power
Create a program that generates a deck of cards (class Card) which have a power.
 The power of a card is calculated by adding the power of its rank plus the power of its suit. 
 Rank powers are as follows: (ACE - 14, TWO - 2, THREE - 3, FOUR - 4, FIVE - 5, SIX - 6, SEVEN - 7, EIGHT - 8, 
 NINE - 9, TEN - 10, JACK - 11, QUEEN - 12, KING - 13).
Suit powers are as follows: (CLUBS - 0, DIAMONDS - 13, HEARTS - 26, SPADES - 39).
You will get a command consisting of two lines. On the first line you will receive the Rank of the card and on the second 
line you will get the suit of the card. 
Print the output in the format "Card name: ACE of SPADES; Card power: 53".
Note
Try using the enumeration types you have created in the previous problems but extending them with constructors and methods.
 Try using the Enum.valueOf().

Examples

Input	Output
TWO
CLUBS	Card name: TWO of CLUBS; Card power: 2
ACE
SPADES	Card name: ACE of SPADES; Card power: 53
-------------------------------------------------------------------------------------------------
3.Cards with Power - Solution with class.
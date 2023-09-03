function createDeck() {

    /// Create the cards and suits and "zip" them into a single list
    let deck = []
    let cards = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King']
    let suits = ['Spades', "Clubs", "Hearts", "Diamonds"]

    for (c in cards) {
        for (s in suits) {
            deck.push(`${cards[c]} of ${suits[s]}`)
        }

    }
    /// Shuffle the deck
    
    random_deck = deck.sort(() => (Math.random() > .5) ? 1 : -1) 
   
    return random_deck
}

function getValues(value) {

    values = {
        "Two": 2,
        "Three": 3,
        "Four": 4,
        "Five": 5,
        "Six": 6,
        "Seven": 7,
        "Eight": 8,
        "Nine": 9,
        "Ten": 10,
        "Jack": 11,
        "Queen": 12,
        "King": 13,
        "Ace": 14
    }
    
    return values[value]

}

function twoPlayers() {

    random_deck = createDeck()
    player_one_deck = []
    player_two_deck = []
    random_deck.map((v,i)  => {
        if (i % 2 == 0) {
            player_one_deck.push(v)
        } else {
            player_two_deck.push(v)
        } 
        
    })
    console.log("Deck Shuffled, Hands Created")
    return {player_one_deck, player_two_deck}
}


class Deck {
    constructor(name,cards) {
        this.name = name;
        this.cards = cards    
    }
    
    getCard() {
        this.play = this.cards.shift()
        this.value = this.play.split(' ')[0]
        return [this.play, this.value]
    }


} 

let hands = twoPlayers()

function createClasses(){
    
    const player1 = new Deck("Player One's Hand", hands['player_one_deck'])
    const player2 = new Deck("Player Two's Hand", hands['player_two_deck'])

    console.log("Got cards")
    return [player1, player2]

}


[player1,player2] = createClasses()


function getPlays(a,b) {
    
    checkVictor(a,b)

}

function checkVictor(a,b) {
    
    player_one_play = a.getCard()
    player_two_play = b.getCard()
    cards_in_play = [player_one_play[0], player_two_play[0]]
    console.log(player_one_play, player_two_play)
    if (getValues(player_one_play[1])>getValues(player_two_play[1])) {
        awardPlayer(a,b,cards_in_play)
        console.log('Player One won this round!')
           
    } else if (getValues(player_two_play[1])>getValues(player_one_play[1])) {
       awardPlayer(b,a,cards_in_play)
        console.log("Player Two won this round!")
        
    } else {
        console.log("We have a draw!")

        tie(a,b,cards_in_play)
    }

}

function awardPlayer(winner,loser,cards) {
    console.log(winner.cards)
    console.log(cards)
    cards.map((v) => {
        
        winner.cards.push(v)

    })
    
    console.log(winner,loser)
    console.log(`There are ${winner.cards.length + loser.cards.length} cards in play`)
    return [winner, loser] 
}

function draw() {
    getPlays(player1,player2)
    
    

}

function tie(a,b,cards_in_play) {
    starter_cards = cards_in_play
    card_one = [a.getCard()[0], b.getCard()[0]]
    card_two = [a.getCard()[0], b.getCard()[0]]
    player_one_play = a.getCard()
    player_two_play = b.getCard()
    cards_in_play = [player_one_play[0], player_two_play[0]]
    cards_in_play = cards_in_play.concat(card_one,card_two, starter_cards)
    console.log(cards_in_play)
    console.log(player_one_play, player_two_play)
    
    if (getValues(player_one_play[1])>getValues(player_two_play[1])) {
        awardPlayer(a,b,cards_in_play)
        console.log('Player One won this round!')
           
    } else if (getValues(player_two_play[1])>getValues(player_one_play[1])) {
       awardPlayer(b,a,cards_in_play)
        console.log("Player Two won this round!")
        
    } else {
        console.log("We have a another draw!")

        tie(a,b,cards_in_play)
    }

}
// initiate the game
    /// create classes

    /// compare cards

    /// update hand

    /// 
let count = 0
while (player1.cards.length > 0 || player2.cards.length > 0) {
    draw()
    count = count+1
    console.log(`It is now turn ${count}`)
} 


// Sometimes this only takes 85 tunrs, sometimes it takes nearly (or over) 100k!
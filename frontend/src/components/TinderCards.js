import { SwipeableDrawer } from '@material-ui/core'
import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import '../styles/TinderCards.css'

function TinderCards() {

  const [people, setPeople] = useState([
    {
      name: 'Tom Hiddleston',
      url: 'https://tvguide1.cbsistatic.com/mediabin/showcards/celebs/s-u/thumbs/tom-hiddleston-325607_828x1104.png',
    },
    {
      name: 'RuPaul',
      url: 'https://media2.s-nbcnews.com/j/newscms/2020_15/3304406/200410-rupaul-scret-drag-race-se-436p_c2e2f6ae6350d5d49a4f97cf184bfb21.fit-760w.jpg',
    },
    {
      name: 'Arya Stark',
      url: 'https://pyxis.nymag.com/v1/imgs/846/9bb/440e83edacba3579e42bb6ad20860b50b0-18-arya-stark.rsquare.w700.jpg',
    },
    {
      name: 'Sandor Clegane',
      url: 'https://www.redwolf.in/image/catalog/artwork-Images/badges/hound-badge-artwork.jpg',
    },
    {
      name: 'Tormund Giantsbane',
      url: 'https://laughingsquid.com/wp-content/uploads/2017/08/the-career-of-kristofer-hivju-the-actor-who-plays-tormund-giantsbane-on-game-of-thrones.jpg',
    },
    {
      name: 'Brienne of Tarth',
      url: 'https://www.flare.com/wp-content/uploads/2019/04/got-inline.jpg',
    },
  ])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    //setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div style={{ backgroundImage: `url(${person.url})`}}
              className="card">
              <h3>{person.name}</h3>
            </div>

          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards

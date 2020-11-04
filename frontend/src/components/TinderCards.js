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
    }
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

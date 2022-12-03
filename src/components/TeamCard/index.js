import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {cardDetails} = props

  const {name, teamImageUrl} = cardDetails

  return (
    <Link to="/team-matches/:id">
      <li>
        <div className="cardStyle">
          <img src={teamImageUrl} className="iconSize" alt={name} />
          <p className="teamName">{name}</p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard

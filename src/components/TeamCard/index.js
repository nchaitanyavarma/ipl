import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamData} = this.props
    const {name, id, teamImageUrl} = teamData
    return (
      <Link to={`/team-matches/${id}`} className="teams-link">
        <div className="team-card-container">
          <img src={teamImageUrl} alt={name} className="team-card-logo" />
          <p className="team-card-name">{name}</p>
        </div>
      </Link>
    )
  }
}
export default TeamCard

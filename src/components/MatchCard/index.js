import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  renderColor = () => {
    const {matchResult} = this.props
    const {matchStatus} = matchResult
    if (matchStatus === 'Won') {
      return 'match-win'
    }
    return 'match-loss'
  }

  render() {
    const {matchResult} = this.props
    const {
      competingTeam,
      result,
      matchStatus,
      competingTeamLogo,
      id,
    } = matchResult
    const matchStatusClassName = `recent-status ${this.renderColor()}`
    return (
      <li className="recent-match-card">
        <img src={competingTeamLogo} alt={id} className="recent-logo" />
        <h1 className="recent-competing-team">{competingTeam}</h1>
        <p className="recent-result">{result}</p>
        <p className={matchStatusClassName}> {matchStatus}</p>
      </li>
    )
  }
}
export default MatchCard

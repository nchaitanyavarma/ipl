import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatches: '',
    recentMatchesDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getBackgroundColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'CSK':
        return 'csk'
      case 'RCB':
        return 'rcb'
      case 'MI':
        return 'mi'
      case 'KKR':
        return 'kkr'
      case 'RR':
        return 'rr'
      case 'KXP':
        return 'kp'
      case 'DC':
        return 'dc'
      case 'SH':
        return 'srh'
      default:
        return ''
    }
  }

  getMatchDetails = matchResult => ({
    competingTeam: matchResult.competing_team,
    competingTeamLogo: matchResult.competing_team_logo,
    date: matchResult.date,
    firstInnings: matchResult.first_innings,
    id: matchResult.id,
    manOfTheMatch: matchResult.man_of_the_match,
    matchStatus: matchResult.match_status,
    result: matchResult.result,
    secondInnings: matchResult.second_innings,
    umpires: matchResult.umpires,
    venue: matchResult.venue,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamTotalData = {
      latestMatchDetails: this.getMatchDetails(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getMatchDetails(eachMatch),
      ),
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({
      teamBanner: teamTotalData.teamBannerUrl,
      latestMatches: teamTotalData.latestMatchDetails,
      recentMatchesDetails: teamTotalData.recentMatches,
      isLoading: false,
    })
  }

  renderRecentMatches = () => {
    const {recentMatchesDetails} = this.state
    return (
      <ul className="recent-matches-ul-card">
        {recentMatchesDetails.map(match => (
          <MatchCard matchResult={match} key={match.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {teamBanner, latestMatches, isLoading} = this.state
    const teamJersey = this.getBackgroundColor()
    return (
      <div className={`team-matches-container ${teamJersey}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Puff" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="team-matches-bg">
            <img src={teamBanner} alt={id} className="team-banner" />
            <LatestMatch latestGame={latestMatches} />
            {this.renderRecentMatches()}
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches

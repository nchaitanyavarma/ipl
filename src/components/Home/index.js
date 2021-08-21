import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const getTeamsData = data.teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsData: getTeamsData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="bg-container">
        <div className="bg-card">
          <div className="ipl-dashboard">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl-logo"
              className="ipl-logo"
            />
            <h1 className="ipl-dashboard-heading">Ipl Dashboard</h1>
          </div>
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <div className="team-cards">
              {teamsData.map(eachTeamData => (
                <TeamCard teamData={eachTeamData} key={eachTeamData.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Home

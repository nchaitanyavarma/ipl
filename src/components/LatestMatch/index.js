import './index.css'

const LatestMatch = props => {
  const {latestGame} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestGame
  return (
    <div className="latest-matches-card">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-bg-card">
        <div className="latest-team-details-logo-card ">
          <div className="latest-team-details">
            <h1 className="latest-matches-competing-team">{competingTeam}</h1>
            <p className="latest-matches-date">{date}</p>
            <p className="latest-matches-venue-result">{venue}</p>
            <p className="latest-matches-venue-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="latest-matches-component-team-logo"
          />
        </div>
        <hr />
        <div className="latest-matches-innings-card">
          <p className="latest-matches-innings-headings">First Innings</p>
          <p className="latest-matches-innings-para">{firstInnings}</p>
          <p className="latest-matches-innings-headings">Second Innings</p>
          <p className="latest-matches-innings-para">{secondInnings}</p>
          <p className="latest-matches-innings-headings">Man Of Match</p>
          <p className="latest-matches-innings-para">{manOfTheMatch}</p>
          <p className="latest-matches-innings-headings">Umpires</p>
          <p className="latest-matches-innings-para">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch

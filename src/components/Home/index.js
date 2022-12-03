import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    matchCards: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTheMatchCards()
  }

  getTheMatchCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)

    const updatedCards = data.teams.map(eachCard => ({
      id: eachCard.id,
      name: eachCard.name,
      teamImageUrl: eachCard.team_image_url,
    }))
    this.setState({matchCards: updatedCards, isLoading: false})
  }

  renderTheHomePage = () => {
    const {matchCards} = this.state

    return (
      <div className="homeImage">
        <div className="headingContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplLogoSize"
          />
          <h1 className="headingStyle">IPL Dashboard</h1>
        </div>
        <ul className="cardListStyle">
          {matchCards.map(eachMatchCard => (
            <TeamCard cardDetails={eachMatchCard} key={eachMatchCard.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="homeBox">
        {isLoading ? (
          <Loader type="TailSpin" color="green" height={50} width={50} />
        ) : (
          this.renderTheHomePage()
        )}
      </div>
    )
  }
}

export default Home

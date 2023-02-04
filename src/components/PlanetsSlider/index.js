// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const renderPlanets = () => {
    const {planetsList} = props
    return planetsList.map(eachPlanet => (
      <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
    ))
  }
  return (
    <div className="slider-container">
      <h1 className="heading">PLANETS</h1>
      <Slider data-testid="planets" {...settings}>
        {renderPlanets()}
      </Slider>
    </div>
  )
}
export default PlanetsSlider

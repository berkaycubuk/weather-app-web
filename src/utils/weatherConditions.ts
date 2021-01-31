// Icons
import sunnyIcon from '../assets/images/weather-clear.svg'
import fewClouds from '../assets/images/weather-few-clouds.svg'
import cloudsIcon from '../assets/images/weather-clouds.svg'
import mistIcon from '../assets/images/weather-mist.svg'
import lightRainIcon from '../assets/images/weather-showers-scattered.svg'
import moderateRainIcon from '../assets/images/weather-showers.svg'
import lightSnowIcon from '../assets/images/weather-showers-scattered.svg'
import moderateSnowIcon from '../assets/images/weather-showers.svg'

export const weatherConditions = (condition: any) => {
  const conditions = [
    {
      name: "Sunny",
      icon: sunnyIcon
    },
    {
      name: "Partly cloudy",
      icon: fewClouds
    },
    {
      name: "Cloudy",
      icon: cloudsIcon
    },
    {
      name: "Mist",
      icon: mistIcon
    },
    {
      name: "Light rain",
      icon: lightRainIcon
    },
    {
      name: "Moderate rain",
      icon: moderateRainIcon
    },
    {
      name: "Heavy rain",
      icon: moderateRainIcon
    },
    {
      name: "Light snow",
      icon: lightSnowIcon
    },
    {
      name: "Moderate snow",
      icon: moderateSnowIcon
    },
    {
      name: "Heavy snow",
      icon: moderateSnowIcon
    }
  ]

  let result = conditions.find(obj => obj.name === condition.text)

  if (result === undefined) {
    return condition.icon
  } else {
    return result.icon
  }
}
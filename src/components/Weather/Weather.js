import React from 'react'
import useFetch from '../../utils/useFetch'
import { WeatherWrapper, WeatherSpan } from './Weather.styled'

const Weather = () => {
    const {data, loading, error, request} = useFetch();
    
    React.useEffect(() => {
        request('http://api.weatherapi.com/v1/current.json?key=c54d9525f89c41f0a7c194602220202&q=Juiz de Fora&aqi=no')
    }, [request])

  return (
    <WeatherWrapper>
        {error  && <p>{error}</p>}
        {loading && <p>Carregando...</p>}
        {data && <p>{data.location.name} - {data.location.region}</p>}
        <WeatherSpan>
            <img src={data ? data.current.condition.icon : '../../assets/sun.png'} alt=""/>
            {data && <h2>{data.current.temp_c}°</h2>}
        </WeatherSpan>
    </WeatherWrapper>
  )
}

export default Weather
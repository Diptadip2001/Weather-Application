import React, { useEffect, useState } from 'react';
import "./css/style.css";

const Tempapp = () => {
    const [city, setCity] = useState("");
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&APPID=67fc818b3306fdb6a4ff90845a93273f`;
            const res = await fetch(url);
            const data = await res.json();
            setCity(data.main);  // Set the city data (temperature, etc.)
        }
        fetchApi();
    }, [search]);  // Add search as a dependency

    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input
                        type='search'
                        className='inputField'
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>

                {!city ? (
                    <h1 className='data'>No Data Found</h1>
                ) : (
                    <div className='info'>
                        <h2 className='location'>
                            <i className="fa-solid fa-street-view"></i>{search}
                        </h2>
                        <h1 className='temp'>
                            {city.feels_like}°C
                        </h1>
                        <h3 className='tempmin_max'>
                            Min: {city.temp_min}°C | Max: {city.temp_max}°C
                        </h3>
                        
                    </div>
                )}

                <div className='wave -one'></div>
                <div className='wave -two'></div>
                <div className='wave -three'></div>
            </div>
        </>
    );
}

export default Tempapp;

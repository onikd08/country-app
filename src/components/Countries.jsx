import { useState, useEffect } from 'react';

const url = 'https://restcountries.eu/rest/v2/all';
const Countries = () => {
    const [countries, setCountries] = useState([]);

    const fetchCountryData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
    }

    useEffect(() => {
        fetchCountryData();
    }, [])
    console.log(countries);

    return (
        <section className="grid">
            {
                countries.map((country) => {
                    const { name, population, region, flag, numericCode, capital } = country;
                    return (
                        <article key={numericCode}>
                            <div>
                                <img src={flag} alt={name} />
                                <h3>{name}</h3>
                                <h4>{population}</h4>
                                <h4>{region}</h4>
                                <h4>{capital}</h4>

                            </div>
                        </article>
                    )
                })
            }
        </section>


    );
}

export default Countries;
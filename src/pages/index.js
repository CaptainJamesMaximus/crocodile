const url = "https://corona.lmao.ninja/v2/countries/gh";

function Home({ covidCase }) {
  return (
    <div>
      <img width="100px" src={covidCase.countryInfo.flag} />
      <h2>{covidCase.country}</h2>
      <p>{covidCase.cases}</p>
      <p>{covidCase.deaths}</p>
      <p>{covidCase.active}</p>
      <p>{covidCase.recovered}</p>

      <style jsx>{`
          div {
              background-color: yellow;
              width: 100%;
              height: 100vh;
                        
          }
          `}

      </style>
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(url);

  return {
    props: {
      covidCase: await response.json(),
    }, //passing it to the props component as props
  };
}

export default Home;

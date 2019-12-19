import fetch from 'isomorphic-unfetch'

function BestJokes({stars}) {
  return (
    <div>
      <p>The Best Jokes for Chuck Norris</p>
      <ul>
        { stars.map( (star)  => { return <li>{star.joke}</li> }) }
      </ul>
    </div>
  );
  
}

BestJokes.getInitialProps = async ({ req }) => {
  const res = await fetch('http://api.icndb.com/jokes/random/30')
  const json = await res.json()

  return { stars: json.value }
}

export default BestJokes
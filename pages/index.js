import { useState } from 'react';
import CoinList from '../src/components/CoinList';
import SearchBar from '../src/components/SearchBar';
import Layout from '../src/components/Layout';

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('');

  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = e => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className='coin_app'>
        <SearchBar type='text' placeholder='Search' onChange={handleChange} />
        <CoinList filteredCoins={allCoins} />

        {/* <footer>
          <div class="col-xs-12">
              <h1>About</h1>
              <p>Hello.  My name is <a href="https://jasonleewilson.com/" target="_blank">Jason Lee Wilson</a>. I built this site with AngularJS and json data from <a href="https://coinmarketcap.com" target="_blank">coinmarketcap.com</a>.  View the source on <a href="https://github.com/jasonleewilson/current-price.com" target="_blank">Github</a>.</p>
          </div>
        </footer> */}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );

  const filteredCoins = await res.json();

  return {
    props: {
      filteredCoins
    }
  };
};
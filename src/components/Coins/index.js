import styles from './Coins.module.css';
import Link from 'next/link';

const Coins = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  id
}) => {
  // Add a defensive check to ensure priceChange is not null or undefined
  const formattedPriceChange = priceChange !== null && priceChange !== undefined
    ? priceChange.toFixed(2)
    : 'N/A'; // Or any other placeholder value

  return (
    <Link href='/coin/[id]' as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coin_img} />
              <h1 className={styles.coin_h1}>{name}</h1>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>${price}</p>
              <p className={styles.coin_volume}>${volume?.toLocaleString()}</p> {/* Use optional chaining for volume too */}

              {priceChange < 0 ? (
                <p className={`${styles.coin_percent} ${styles.red}`}>
                  {formattedPriceChange}%
                </p>
              ) : (
                <p className={`${styles.coin_percent} ${styles.green}`}>
                  {formattedPriceChange}%
                </p>
              )}

              <p className={styles.coin_marketcap}>
                Mkt Cap: ${marketcap?.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;

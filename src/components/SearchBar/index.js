import styles from './Seach.module.css'

const SearchBar = ({...rest}) => {
    return (
        <div className={styles.coin_search}>
            {/* <h1>Search</h1> */}
            <input className={styles.coin_input} {...rest}/>
        </div>
    )
}

export default SearchBar;

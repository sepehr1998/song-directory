import './Header.css'
import { SearchBar } from "../SearchBar/SearchBar.js"
function Header ({ onSearch }) {
    return (
        <div className="header">
            <div>
                <h1>
                    NEW SONGS DELIVERED EVERY WEEK
                </h1>
                <p>
                    Here are the most recent additions to the Yousician App. Start playing today!
                </p>
                <div className="search">
                    <SearchBar onSearch={onSearch}/>
                </div>
            </div>
        </div>
    )
}
export default Header;
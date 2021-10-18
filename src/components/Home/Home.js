import '../Home/home.css'

export default function Home(props) {
    return (
        <div className="home">
            <p className="para">This is the home page.</p>
            <p className="para">Click on user list for list of users . For more details of user please click on the More Details button.</p>
            <p className="para">Go to Address List page to see detailed User profile by clicking on the first name of each user.</p>
        </div>
    )
}
import { Link } from 'react-router-dom'

import styles from "./common.module.css"

const ClientPage = () => {
    return (
        <div>
            <h1>Tell us about yourself</h1>
            <form className={styles.formContainer}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Add text" name={"name"}/>
                <label htmlFor="age">Age</label>
                <input id="age" name="age"/>
                <label htmlFor="country">Where do you live</label>
                <select id="country" name="country">
                    <option>Hong Kong</option>
                    <option>USA</option>
                    <option>Australia</option>
                </select>
                <input type="radio" name="package" value={"standard"}/>Standard
                <input type="radio" name="package" value={"safe"}/>Safe (+250HKD, 50%)
                <input type="radio" name="package" value={"super-safe"}/>Super Safe (+375HKD, 75%)
                <p>Your premium is:</p>
                <p className={styles.centered}>
                    <Link to={"/"}><button>Back</button></Link>
                    <Link to={"/summary"}><button>Next</button></Link>
                </p>
            </form>
        </div>
    );
}

export default ClientPage;
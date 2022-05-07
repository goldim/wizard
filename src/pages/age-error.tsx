import { Link } from 'react-router-dom'

const AgeError = () => (
    <div>
        <h1>Oops</h1>
        <p>Your age is over our accepted limit.</p>
        <p>We are sorry but we can't insure you now.</p>
        <p><Link to='/'>Ok :(</Link></p>
    </div>
);

export default AgeError;
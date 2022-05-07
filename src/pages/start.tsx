import { Link } from 'react-router-dom'

const StartPage = () => (
    <div>
        <h1>Hello There!</h1>
        <p>Let's buy some insurance. It is going to take only a few steps</p>
        <p><Link to='client'>Start</Link></p>
    </div>
);

export default StartPage;
import appStyles from './app.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StartPage from '../../pages/start';
import Page404 from '../../pages/not-found';
import { Provider } from 'react-redux';
import { ReduxStore } from '../../services/storage'
import ClientPage from "../../pages/client";
import SummaryPage from "../../pages/summary";

function App() {
    return (
        <Provider store={ ReduxStore }>
            <div className={ appStyles.App }>
                <Router>
                    <main>
                    <Routes>
                        <Route path="/" element={<StartPage/>} />
                        <Route path="/client" element={<ClientPage/>} />
                        <Route path="/summary" element={<SummaryPage/>} />
                        <Route path="*" element={<Page404/>} />
                    </Routes>
                    </main>
                </Router>
            </div>
        </Provider>
    );
}

export default App;

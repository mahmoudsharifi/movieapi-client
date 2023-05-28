import { createRoot } from 'react-dom/client';

import "./index.scss";

const App = () => {
    return (
        <div className="my-flix">
            <div>Good morning</div>
        </div>
    );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<App />);
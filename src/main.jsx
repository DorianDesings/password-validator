import { createRoot } from 'react-dom/client';
import Card from './components/card/Card';

import './index.css';

const container = document.getElementById('root');

createRoot(container).render(<Card />);

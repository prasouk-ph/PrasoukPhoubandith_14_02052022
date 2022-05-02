import { Link } from 'react-router-dom';
import './NotFoundPage.css';

function NoPage() {
    return (
    <main className='NotFoundPage'>
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className='link'>Retourner sur la page d’accueil</Link>
    </main>
    );
}

export default NoPage;
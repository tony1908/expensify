import React from 'react';
import { Link } from 'react-router-dom';

const notFoundPage = props => (
    <div>
        404 - <Link to="/"> Go Home </Link>
    </div>
)

export default notFoundPage;
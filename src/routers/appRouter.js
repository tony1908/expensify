import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpensePage from '../components/addExpensePage';
import EditExpensePage from '../components/editExpensePage';
import ExpenseDasboard from '../components/expenseDashboard';
import HelpPage from '../components/helpPage';
import NotFoundPage from '../components/notFoundPage';
import Header from '../components/header';

const AppRouter = props => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDasboard} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;

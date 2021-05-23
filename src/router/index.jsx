import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Layout from "../layout";
import NoPage from "../pages/no-page";

const Home = React.lazy(() => import('../pages/home'))
const Post = React.lazy(() => import('../pages/post'))
const Sheet = React.lazy(() => import('../pages/sheet'))
const Links = React.lazy(() => import('../pages/links'))
const Search = React.lazy(() => import('../pages/search'))
// import Home from '../pages/home';
// import Post from "../pages/post";
// import Sheet from "../pages/sheet";
// import Links from "../pages/links";
// import Search from "../pages/search";

const DiaRouter = () => {
    return (
        <Switch>
            <Route path="/">
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home/:page" component={Home}/>
                        <Route exact path="/:category/:slug/:page" component={Home}/>
                        <Route exact path="/links" component={Links}/>
                        <Route exact path="/post/:id" component={Post}/>
                        <Route exact path="/sheet/:slug" component={Sheet}/>
                        <Route exact path="/search/" component={Search}/>
                        <Route exact path="/search/:keyword" component={Search}/>
                        <Route component={NoPage}/>
                    </Switch>
                </Layout>
            </Route>
        </Switch>
    );
};

export default DiaRouter;

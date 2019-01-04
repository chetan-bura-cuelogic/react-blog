import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Helmet } from 'react-helmet';
import Layout from './theme/layout/Layout';
import Private from './modules/private/index';
import Public from './modules/public/index';
import './assets/semantic/semantic.min.css';
import './App.css';

@inject('cmsStore')
@withRouter
@observer
class App extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
        <title>Home</title>
          <meta name="description" content="Regulation Crowdfunding portal in the US." />
          <link rel="canonical" href="https://chetan-bura-cuelogic.github.io/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={`${Date()}Local Businesses through Debt Crowdfunding`} />
          <meta property="og:description" content="Regulation Crowdfunding portal in the US." />
          <meta property="og:url" content="https://chetan-bura-cuelogic.github.io/" />
          <meta property="og:site_name" content="NextSeed" />
          <meta property="og:image" content="https://cdn.nextseed.co/app/uploads/IMG_2710.jpg" />
          <meta property="og:image:secure_url" content="https://cdn.nextseed.co/app/uploads/IMG_2710.jpg" />
          <meta property="og:image:width" content="1600" />
          <meta property="og:image:height" content="1067" />
        </Helmet>
        <Switch>
          <Route exact path="/app/*" component={Private} />
          <Route path="/" component={Public} />
        </Switch>
      </Layout>
    );
  }
}

export default App;

import React from 'react';
import { inject, observer } from 'mobx-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Segment, Container, Grid } from 'semantic-ui-react';
import { LoadingSpinner, NotFound } from '../../theme/common/ImportCommon';
import Header from '../../theme/layout/Header';
import Footer from '../../theme/layout/Footer';
import Page from '../private/Cms/containers/Page';

@inject('cmsStore')
@withRouter
@observer
export default class Public extends React.Component {
  componentWillMount() {
    this.props.cmsStore.getPageMetaData('published');
  }
  render() {
    const { pages, loading } = this.props.cmsStore;

    const cmsPages = pages ? pages.map(n => n.slug) : [];
    if (loading) {
      return <LoadingSpinner />
    }
    return (
      <div>
        <Header navigation={pages} />
          <Helmet>
          <title>Home</title>
            <meta name="description" content="Regulation Crowdfunding portal in the US." />
            <link rel="canonical" href="https://5c2f4651b1d1d7cc4036914d--infallible-wilson-023261.netlify.com/" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={`${Date()}Local Businesses through Debt Crowdfunding`} />
            <meta property="og:description" content="Regulation Crowdfunding portal in the US." />
            <meta property="og:url" content="https://5c2f4651b1d1d7cc4036914d--infallible-wilson-023261.netlify.com/" />
            <meta property="og:site_name" content="NextSeed" />
            <meta property="og:image" content="https://cdn.nextseed.co/app/uploads/IMG_2710.jpg" />
            <meta property="og:image:secure_url" content="https://cdn.nextseed.co/app/uploads/IMG_2710.jpg" />
            <meta property="og:image:width" content="1600" />
            <meta property="og:image:height" content="1067" />
          </Helmet>
          <Segment vertical className="content">
            <Container>
              <Grid columns={1}>
                <Grid.Row>
                  <Grid.Column>
                    <Switch>
                      <Route path={`/:slug(${cmsPages.join('|')})`} component={Page} />
                      <Route exact path="/" component={Page} />
                      <Route component={NotFound} />
                    </Switch>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        <Footer />
      </div>
    );
  }
}

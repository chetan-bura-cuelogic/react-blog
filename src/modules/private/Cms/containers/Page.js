
import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import { Helmet } from 'react-helmet';
import { NotFound } from '../../../../theme/common/ImportCommon';

@inject('cmsStore')
@observer
class Page extends Component {
  componentWillMount() {
    this.props.cmsStore.getPageContent(this.props.match);
  }
  componentWillReceiveProps(nextProps) {
    this.props.cmsStore.getPageContent(nextProps.match);
  }
  render() {
    const { pageContent } = this.props.cmsStore;
    if(pageContent === 'NO_MATCH') {
      return <NotFound />;
    }
    if (pageContent === true) {
      return 'loading..';
    }
    return (
      <div>
        <Helmet>
        <title>Home</title>
          <meta name="description" content={pageContent.title} />
          <link rel="canonical" href="https://5c2f4651b1d1d7cc4036914d--infallible-wilson-023261.netlify.com/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageContent.title} />
          <meta property="og:description" content={pageContent.title} />
          <meta property="og:url" content="https://5c2f4651b1d1d7cc4036914d--infallible-wilson-023261.netlify.com/" />
          <meta property="og:site_name" content="Blog" />
          <meta property="og:image" content="https://cdn.nextseed.co/app/uploads/IMG_2710.jpg" />
          <meta property="og:image:secure_url" content="https://cdn.nextseed.co/app/uploads/IMG_2710.jpg" />
          <meta property="og:image:width" content="1600" />
          <meta property="og:image:height" content="1067" />
        </Helmet>
        <h2>{pageContent.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: pageContent.description }} />
      </div>
    );
  }
}

export default Page;

import React, { Component } from 'react';
import Aux from 'react-aux';
import { Sidebar, Menu } from 'semantic-ui-react';
import { SidebarNav } from './SidebarNav';

class SidebarLeftPush extends Component {
  render() {
    return (
      <Aux>
        <Sidebar.Pushable>
          <Aux>
            <Sidebar
              as={Menu}
              animation="push"
              width="thin"
              visible
              icon
              vertical
              inverted
            >
              <SidebarNav />
            </Sidebar>
          </Aux>
          <Sidebar.Pusher>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Aux>
    );
  }
}
export default SidebarLeftPush;

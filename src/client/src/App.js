import React, { Component } from 'react'
import { connect } from 'react-redux'

import AsyncComponent from './common/asyncComponent'
import Header from './components/header'
import Footer from './components/footer'
import {getApiData} from './actions'
import store from './store'

// Import first module in page to avoid that being lazy loaded for quicker first paint
import HeroImage from './components/heroimage'

import './style/App.css'

class App extends Component {
  constructor(props) {
    super(props);
    let initComponents = [];
    let initHeader = null;
    let initFooter = null;
    if (props.page) {
      initComponents = props.page.modules;
      initHeader = props.page.header;
      initFooter = props.page.footer
    }
    this.state = {
      componentsData: initComponents,
      header: initHeader,
      footer: initFooter
    }
  }

  componentWillMount() {
    // Attempt to load data from data attribute
    if(this.state.componentsData.length === 0) {
      this.props.dispatch(getApiData(this.props.id));
    }
    else {
      this.loadComponents(this.state.componentsData);
    }
  }

  componentWillUnmount() {
    this.setState({
      componentsData: []
    })
  }

  componentWillReceiveProps(newProps) {
    // Dispatch action to change the page with new data if id changes
    if(newProps.id !==  this.props.id) {
      this.props.dispatch(getApiData(this.props.id));
    }
    // If we have recieved new components load them
    if(newProps.components !== this.props.components) {
      this.loadComponents(newProps.components);
    }
    // Update header & footer
    if(newProps.header !== this.props.header) {
      this.setState({
        header: newProps.header
      });
    }
    if(newProps.footer !== this.props.footer) {
      this.setState({
        footer: newProps.footer
      });
    }
  }

  loadComponents(componentsData) {
    this.setState({componentsData});
  }

  dynamicallyLoadComponents() {
    let components = [];
    for (let i=0; i<this.state.componentsData.length;i++ ) {
      let componentData = this.state.componentsData[i];
      let componentType = componentData.module.polymorphic_ctype.model;
      // Use webpack dynamic import to get the module
      let componentImport = () => {
        return import(`./components/${componentType}/index`);
      }
      components.push((<AsyncComponent moduleProvider={componentImport} data={componentData} key={i}/>));
    }
    return components;
  }

  render() {
    let components = this.dynamicallyLoadComponents();

    return (
      <div>
        <Header data={this.state.header}/>
        {components}
        <Footer data={this.state.footer}/>
      </div>
    );
  }
}

export default connect(
  state => ({
    components: state.components,
    footer: state.footer,
    header: state.header
  })
)(App);

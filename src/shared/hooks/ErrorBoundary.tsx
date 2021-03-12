import React, { Component } from 'react';

interface MyState {
  hasError: boolean;
}

interface MyProps {}

class ErrorBoundary extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    //TODO logErrorToMyService(error, info);
    console.log('ERROR', error);
    console.log('INFO', info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

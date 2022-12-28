import { getUserId, trackError } from '@fe-observability/utils/errors';
import React, { ErrorInfo } from 'react';

type ErrorBoundaryProps = {
  name: string;
  packageName: string;
  packageVersion: string;
  environment: 'production' | 'development';
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo = {} as ErrorInfo) {
    trackError(error, {
      ...errorInfo,
      packageName: this.props.packageName,
      packageVersion: this.props.packageVersion,
      environment: this.props.environment,
      componentSource: this.props.name,
      errorType: 'ErrorBoundary',
      userId: getUserId(),
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <article className="message is-danger">
          <div className="message-header">
            <p>Error</p>
            <button
              className="delete"
              aria-label="delete"
              onClick={() => this.setState(() => ({ hasError: false }))}
            >
              Reset
            </button>
          </div>
          <div className="message-body">
            <p>Error in module {this.props.name}</p>
          </div>
        </article>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };

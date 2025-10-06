import React, { Component, type ErrorInfo, type ReactNode } from "react";
import { Card, Title3, Text, Button } from "@fluentui/react-components";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log error info here if needed
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Card style={{ maxWidth: 400, margin: "40px auto", padding: 32 }}>
          <Title3>Something went wrong.</Title3>
          <Text style={{ margin: "16px 0" }}>
            {this.state.error?.message || "An unexpected error occurred."}
          </Text>
          <Button appearance="primary" onClick={this.handleReload}>
            Reload Page
          </Button>
        </Card>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
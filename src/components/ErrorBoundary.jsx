import React from 'react';

/**
 * Error Boundary Component
 * Catches errors in child components and displays a fallback UI
 * Prevents entire app from crashing if one component fails
 */
class ErrorBoundary extends React.Component {
  /**
   * @param {Object} props - Component props
   */
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  /**
   * Update state when an error is caught
   * @param {Error} error - The error that was thrown
   * @returns {Object} New state
   */
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  /**
   * Log error details for debugging
   * @param {Error} error - The error that was thrown
   * @param {Object} errorInfo - Additional error information
   */
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
          <div className="max-w-md w-full bg-white rounded-lg border border-red-200 p-6">
            <h2 className="text-xl font-bold text-red-600 mb-2">Oops! Something went wrong</h2>
            <p className="text-sm text-slate-600 mb-4">
              We encountered an unexpected error. Please try refreshing the page.
            </p>
            <pre className="bg-red-50 p-3 rounded text-xs text-red-700 overflow-auto mb-4">
              {this.state.error?.toString()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="w-full px-4 py-2 bg-slate-900 text-white rounded font-semibold hover:bg-slate-800 transition"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

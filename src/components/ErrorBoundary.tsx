import { Component, type ErrorInfo, type ReactNode } from 'react';
import { PawPrint, RefreshCw } from 'lucide-react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

/**
 * ErrorBoundary Component
 * Catches errors in children components and prevents the whole app from crashing.
 * Essential for risky components like Spline 3D or heavy Canvas logic.
 */
export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error in child component:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="flex flex-col items-center justify-center p-8 bg-background/50 backdrop-blur-md rounded-3xl border border-primary/10 text-center space-y-4 h-full min-h-[400px]">
                    <div className="relative">
                        <PawPrint className="w-16 h-16 text-primary/30" />
                        <RefreshCw className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-spin" />
                    </div>
                    <h3 className="text-xl font-bold font-heading">Ops! Um obstáculo no caminho</h3>
                    <p className="text-foreground/60 max-w-xs font-body">
                        Não conseguimos carregar a experiência 3D no momento, mas o resto do site continua funcionando perfeitamente!
                    </p>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="px-6 py-2 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all active:scale-95"
                    >
                        Tentar novamente
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

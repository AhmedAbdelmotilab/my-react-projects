interface ErrorMessageProps {
  errorMessage: string;
}
function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  return <div className="error">❌ {errorMessage}</div>;
}
export default ErrorMessage;

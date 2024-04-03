import { useRouteError } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  console.log(error);

  return (
    <h4 className="font-bold text-4xl text-center mt-28">
      there was an error...
    </h4>
  );
}
export default ErrorElement;

import React from "react";
import ReactDOM from "react-dom";

const Info = ({ info }) => {
  return (
    <div>
      <h1>info</h1>
      <p>The info is: {info}</p>
    </div>
  );
};

const widthAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticate ? (
        <WrappedComponent {...props} />
      ) : (
        <p>This user is not authenticated</p>
      )}
    </div>
  );
};

const AdminInfo = widthAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="there are the details" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticate={false} info="there are the details" />,
  document.getElementById("app")
);

import { Link } from "react-router";
import "../../auth.css";

const AuthContainer = ({ title, children, footerTitle, footerCta, footerLink }) => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-6 relative">
        <div className="glass-effect rounded-2xl p-8 sm:p-12 shadow-2xl shadow-black/40 max-w-md w-full">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
              NOIR
            </h1>
            <p className="text-gray-400 text-sm">{title}</p>
          </div>
          {children}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              {footerTitle}{" "}
              <Link
                to={footerLink}
                className="font-medium text-white hover:underline"
              >
                {footerCta}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthContainer;

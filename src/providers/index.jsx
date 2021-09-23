import { AuthenticationProvider } from "./Authentication";
import { CepProvider } from "./CepProvider";

const Providers = ({ children }) => {
    return (
        <AuthenticationProvider>
            <CepProvider>
                    {children}
            </CepProvider>
        </AuthenticationProvider>
    );
  };
  
  export default Providers;
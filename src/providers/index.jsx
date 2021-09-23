import { CepProvider } from "./CepProvider";

const Providers = ({ children }) => {
    return (
        <CepProvider>
                {children}
        </CepProvider>
    );
  };
  
  export default Providers;
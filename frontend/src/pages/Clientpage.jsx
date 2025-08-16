import Tablelist from '../components/Tablelist'
import ModalForm from '../components/ModalForm'
import { ClientProvider } from '../context/ModalContext'

const Clientpage = () => {
  return (
      <ClientProvider>
        <ModalForm/>
        <Tablelist/>
      </ClientProvider>
  );
};

export default Clientpage;
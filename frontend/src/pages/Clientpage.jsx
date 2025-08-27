import Tablelist from '../components/Tablelist'
import ModalForm from '../components/ModalForm'
import { ClientProvider } from '../context/ModalContext'

const Clientpage = () => {
  return (
    <div className="bg-gray-800">
      <ClientProvider>
        <ModalForm/>
        <Tablelist/>
      </ClientProvider>
    </div>
  );
};

export default Clientpage;
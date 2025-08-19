import Tablelist from '../components/Tablelist'
import ModalForm from '../components/ModalForm'
import { ClientProvider } from '../context/ModalContext'

const Clientpage = () => {
  return (
    <div className="h-[2000px] bg-gray-800">
      <ClientProvider>
        <ModalForm/>
        <Tablelist/>
      </ClientProvider>
    </div>
  );
};

export default Clientpage;
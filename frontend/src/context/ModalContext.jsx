import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react"
import {api} from "../lib/axios";


const ModalContext = createContext(null); 

export const useClient = () => useContext(ModalContext)

export const ClientProvider = ({ children }) => {
    const [clients, setClients] = useState([])
    const [selectedClient, setSelectedClients] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalMode, setModalMode] = useState("add")
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)

    const abortRef = useRef(null);

    const fetchClient = async (q = "") => {
        try {
            setLoading(true)

            if (abortRef.current) abortRef.current.abort()
                abortRef.current = new AbortController();

            const res = await api.get("/api/clients", {
                params: q ? { search : q } : {},
                signal: abortRef.current.signal,
            });
            setClients(res.data?.data ?? res.data ?? []);
        } catch (err) {
            if  (err.name !== "CanceledError" && err.code !== "ERR_CANCELED") {
                console.error(
                    "fetchClients error: ",
                    err?.response?.data || err.message
                );
            }
        } finally {
            setLoading (false);
        }
    };

    //create client
    const addClient = async (payload) => {
        await api.post("/api/clients", payload);
        await fetchClient(search);
        closeModal();
    };

    
    //update Client
    const updateClient = async (id, payloadPartial) => {
        await api.put(`/api/clients/${id}`, payloadPartial);
        await fetchClient(search);
        closeModal();
    };
    
    //delete client
    const deleteClient = async (id) => {
        await api.delete(`/api/clients/${id}`);
        await fetchClient(search);
    }

    // Open modal for Edit
    const openEditModal = (clients) => {
        setSelectedClients(clients);
        setModalMode("edit")
        setIsModalOpen(true)
    }

    // Open Modal for add new client
    const openAddModal = () => {
        setSelectedClients(null)
        setModalMode("add")
        setIsModalOpen(true)
    }

    const closeModal = () => setIsModalOpen(false)

    useEffect(() => {
        fetchClient();
    }, [])

    useEffect(() => {
        const t = setTimeout(() => fetchClient(search), 300);
        return () => clearTimeout(t);
    }, [search]);

    const value = useMemo(
        () => ({
            //data
            clients,
            loading,
            //modal
            selectedClient,
            isModalOpen,
            modalMode,
            openAddModal,
            openEditModal,
            closeModal,
            //crud
            fetchClient,
            addClient,
            updateClient,
            deleteClient,
            //search
            search,
            setSearch
        }),
        [clients, loading, selectedClient, isModalOpen, modalMode, search]
    );

    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    );
};
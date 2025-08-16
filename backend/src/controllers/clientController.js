import { createClients, getClients, updateClients, deleteClient, searchClients } from "../services/clientServices.js";

export const clientController = {
    create: async (req, res) => {
        try {
            const newClient = await createClients(req.body);
            res.status(201).json(newClient);
        } catch (error) {
            res.status(200).json({error: error.message});
        }
    },
    get : async (req, res) => {
        try {
            const clients = await getClients();
            res.status(200).json(clients);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    },
    update : async (req,res) => {
        try {
            const updateClient = await updateClients(req.params.id, req.body);
            res.status(200).json(updateClient);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    },
    delete : async (req,res) => {
        try {
            const deletedClient = await deleteClient(req.params.id);
            res.status(200).json(deletedClient)
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    search: async (req,res) => {
        try {
            const { name } = req.query;
            if (!name) {
                return res.status(400).json({error: "parameter 'name' is required"});
            }
            const clients = await searchClients (name);
            res.status(200).json(clients);
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    },
};
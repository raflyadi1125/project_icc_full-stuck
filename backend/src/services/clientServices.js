import { prisma } from "../config/database.js";

export const createClients = async (req) => {
    const newClient = await prisma.client_tb.create ({
        data: {
            name : req.name,
            email : req.email,
            job : req.job,
            rate : req.rate,
            isActive : req.isActive !== undefined ? req.isActive : true,
        },
    });
    return newClient
}

export const getClients = async () => {
    const allClient = await prisma.client_tb.findMany ({
    })
    return allClient;
}

export const updateClients = async (id, data) => {
    const updateClient = await prisma.client_tb.update({
        where : { id },
        data
    })
    return updateClient
}

export const deleteClient = async (id) => {
    const deletedClient = await prisma.client_tb.delete ({
        where: { id }
    })
    return deletedClient
}

export const searchClients = async (name) => {
    const searchClient = await prisma.client_tb.findMany({
        where: {
            name: {
                contains : name
            },
        },
    });
    return searchClient
}
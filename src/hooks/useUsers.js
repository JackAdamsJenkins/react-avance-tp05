import { useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchUsers } from "../services/api"


export const useUsers = () => {
    const queryClient = useQueryClient()

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    })

    const addUser = (newUser) => {
        const user = { ...newUser, id: Date.now()}
        queryClient.setQueryData(['users'], (old) => [user, ...old])
    }

    const deleteUser = (userId) => {
        queryClient.setQueryData(['users'], (old) => old.filter(u => u.id !== userId))
    }


    return { users, isLoading, addUser, deleteUser }
}
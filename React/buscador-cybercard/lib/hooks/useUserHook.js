import { useState, useEffect } from 'react';
import { getAuthenticatedUser } from '../common';

export function useUser() {
    const [user, setUser] = useState(null);
    const [authenticated, setAutenticated] = useState(true);

    useEffect(() => {
        async function getUserDetails() {
            const { authenticated, user } = await getAuthenticatedUser();            
            setUser(user);
            setAutenticated(authenticated);
        }
        getUserDetails();
    }, []);

    return { user, authenticated };
}

import { useRouter } from "expo-router"
import { createContext, PropsWithChildren, useState } from "react"

type AuthState = {
    isLoging: boolean,
    logIn: () => void,
    logOut: () => void
}

export const Authcontext = createContext<AuthState>({
    isLoging: false,
    logIn: () => { },
    logOut: () => { }
})

export function AuthProvider({ children }: PropsWithChildren) {
    const [isLoging, setIsLoging] = useState(false)
    const router = useRouter()

    const logIn = () => {
        console.log('====================================');
        console.log("click");
        console.log('====================================');
        setIsLoging(true);
        router.replace("/(tabs)");
    }

    const logOut = () => {
        setIsLoging(false)
        router.replace("/login")
    }

    return (
        <Authcontext.Provider value={{ isLoging, logOut, logIn }}>
            {children}
        </Authcontext.Provider>
    )
}
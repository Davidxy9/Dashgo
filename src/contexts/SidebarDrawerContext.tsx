import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SiderbarDrawerProviderProps {
    children: ReactNode;
}

type SideBarDrawerContextData = UseDisclosureReturn

const SiderbarDrawerContext = createContext({} as SideBarDrawerContextData);

export function SiderbarDrawerProvider({ children }: SiderbarDrawerProviderProps){
    const discloure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        discloure.onClose()
    },[router.asPath])
    return(
        <SiderbarDrawerContext.Provider value={discloure}>
            {children}
        </SiderbarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SiderbarDrawerContext)
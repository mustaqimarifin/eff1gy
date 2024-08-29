"use client"

import type { ReactNode } from "react"
import { createContext, useState } from "react"

import { ApolloWrapper } from "./ApolloWrapper"

interface Props {
	children?: ReactNode
}

const globalNavigationContext = {
	isOpen: false,
	setIsOpen: (val: boolean) => {},
}

export const GlobalNavigationContext = createContext(globalNavigationContext)

export function Providers({ children }: Props) {
	const initialState = {
		isOpen: false,
		setIsOpen,
	}

	const [state, setState] = useState(initialState)

	function setIsOpen(isOpen: boolean) {
		return setState({ ...state, isOpen })
	}

	return (
		<ApolloWrapper>
			<GlobalNavigationContext.Provider value={state}>
				{children}
			</GlobalNavigationContext.Provider>
		</ApolloWrapper>
	)
}

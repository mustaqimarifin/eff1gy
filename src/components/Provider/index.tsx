"use client"

import type { ReactNode } from "react"
import { createContext, useState } from "react"

import React from "react"
import { ApolloWrapper } from "./ApolloWrapper"

interface Props {
	children?: ReactNode
	//session?: Session
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
	type Init = typeof initialState

	const [state, setState] = useState<Init | null>(initialState)

	function setIsOpen(isOpen: boolean) {
		return setState({ ...state, isOpen })
	}

	const value = React.useMemo(
		() => ({
			...initialState,
			...setIsOpen,
		}),
		[initialState, setIsOpen],
	)

	return (
		<GlobalNavigationContext.Provider value={value}>
			<ApolloWrapper>{children}</ApolloWrapper>
		</GlobalNavigationContext.Provider>
	)
}

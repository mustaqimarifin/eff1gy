"use client"

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react"
import type { ReactElement } from "react"
import { Fragment, useRef, useState } from "react"

export interface DialogProps {
	trigger?: ReactElement | null
	children?: any | null
	title?: string
	modalContent?: any
}

export const DialogComponent = ({ trigger, children, modalContent }: DialogProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const closeButtonRef = useRef(null)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	return (
		<>
			{trigger && <div onClick={openModal}>{trigger}</div>}
			{children?.({ closeModal, openModal })}
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={closeModal}
					initialFocus={closeButtonRef}
				>
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</TransitionChild>
					<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<TransitionChild
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg dark:bg-gray-700">
									<div className="flex flex-col">
										<div className="overflow-y-auto">
											{modalContent({ closeModal, openModal })}
										</div>
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

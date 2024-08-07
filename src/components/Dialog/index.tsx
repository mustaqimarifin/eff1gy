"use client"

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react"
import type { ReactElement } from "react"
import { Fragment, memo, useRef, useState } from "react"

export interface DialogProps {
	trigger?: ReactElement | null
	children?: any | null
	title?: string
	modalContent?: any
}

export function DialogComponent({ trigger = null, children = null, modalContent }: DialogProps) {
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

			{/*
        Rendering children as a function here allows us to
        wrap any component in a dialog handler, while still rendering
        that component. For example, we can wrap the CommentForm component
        in a dialog, render the comment form itself, but pass it the SignIn
        dialog's openModal and closeModal handlers. Those handlers can then
        be invoked programatically in the CommentForm if a user tries to
        send a comment without being signed in.
      */}
			{children?.({ closeModal, openModal })}

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal} initialFocus={closeButtonRef}>
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
								<DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all dark:bg-gray-700 sm:my-8 sm:w-full sm:max-w-lg">
									<div className="flex flex-col">
										<div className="overflow-y-auto">
											{/*
                      A dialog must receive modal content to be rendered
                      once the dialog is opened. That dialog content receives
                      open and close handlers so that a dialog can be closed
                      programatically. For example, after creating a bookmark
                      we can close the dialog and then redirect the user
                      to the new bookmark view.
                    */}
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

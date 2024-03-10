import { useCallback, useEffect, useRef, useState } from "react";

//^const [user, setUser, removeUser] = useSessionStorage("user", "John Doe")

export const useLocalStorage = (key, value) => useStorage(key, value, window.localStorage);

export const useSessionStorage = (key, value) => {
	return useStorage(key, value, window.sessionStorage);
};

const useStorage = (key, value, storageObject) => {
	const [storageValue, setStorageValue] = useState(() => {
		const jsonValue = storageObject.getItem(key);
		if (jsonValue != null) return JSON.parse(jsonValue);

		if (typeof value === "function") {
			return value();
		}
		return value;
	});

	useEffect(() => {
		if (storageValue === undefined) return storageObject.removeItem(key);
		storageObject.setItem(key, JSON.stringify(storageValue));
	}, [key, storageValue, storageObject]);

	const remove = useCallback(() => {
		setStorageValue(undefined);
	}, []);

	return [storageValue, setStorageValue, remove];
};

export function useDebounce(value: string, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debouncedValue;
}

type Delay = number | null;
type TimerHandler = (...args: any[]) => void;

export const useInterval = (callback: TimerHandler, delay: Delay) => {
	const savedCallbackRef = useRef<TimerHandler>();

	useEffect(() => {
		savedCallbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		const handler = (...args: any[]) => savedCallbackRef.current(...args);

		if (delay !== null) {
			const intervalId = setInterval(handler, delay);
			return () => clearInterval(intervalId);
		}
	}, [delay]);
};

const hasFocus = () => typeof document !== "undefined" && document.hasFocus();

interface Props {
	onFocus?: () => void;
	onBlur?: () => void;
}

export function useWindowFocus({ onFocus, onBlur }: Props) {
	const [focused, setFocused] = useState(hasFocus); // Focus for first render

	useEffect(() => {
		setFocused(hasFocus()); // Focus for additional renders

		const onFocus = () => setFocused(true);
		const onBlur = () => setFocused(false);

		window.addEventListener("focus", onFocus);
		window.addEventListener("blur", onBlur);

		return () => {
			window.removeEventListener("focus", onFocus);
			window.removeEventListener("blur", onBlur);
		};
	}, []);

	return focused;
}

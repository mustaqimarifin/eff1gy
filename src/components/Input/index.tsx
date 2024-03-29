import TextareaAutosize from "react-textarea-autosize";

const styles =
	"w-full rounded-md text-primary px-4 py-2 text-primary bg-gray-900 dark:bg-white dark:bg-opacity-5 bg-opacity-5 hover border-gray-200 dark:border-gray-700";

export function Input(props) {
	return <input className={styles} {...props} />;
}

export function Textarea({ maxRows = 8, rows = 1, ...props }) {
	return (
		<TextareaAutosize cacheMeasurements={true} maxRows={maxRows} rows={rows} className={`${styles} block`} {...props} />
	);
}

export function Select(props) {
	return <select className={styles} {...props} />;
}

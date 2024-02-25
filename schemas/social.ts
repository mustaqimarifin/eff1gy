const social = {
	name: "social",
	type: "array",
	title: "Social Links",
	description: "Enter your Social Media URLs",
	validation: (Rule: { unique: () => any }) => Rule.unique(),
	of: [{ type: "media" }],
};
export default social;

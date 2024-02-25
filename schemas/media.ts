const media = {
	title: "Media List",
	name: "media",
	type: "object",
	fields: [
		{
			type: "string",
			name: "media",
			title: "Choose Social Media",
			options: {
				list: [
					{ title: "Twitter", value: "twitter" },
					{ title: "Facebook", value: "facebook" },
					{ title: "Instagram", value: "instagram" },
					{ title: "Linkedin", value: "linkedin" },
					{ title: "Youtube", value: "youtube" },
				],
			},
		},
		{
			type: "url",
			name: "url",
			title: "Full Profile URL",
		},
	],
	preview: {
		select: {
			title: "media",
			subtitle: "url",
		},
	},
};
export default media;

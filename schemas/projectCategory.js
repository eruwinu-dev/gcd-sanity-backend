export default {
	name: "projectCategory",
	title: "Project Category",
	type: "document",
	fields: [
		{
			name: "name",
			title: "name",
			type: "string",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		},
		{
			name: "description",
			title: "Description",
			type: "text",
		},
	],
}


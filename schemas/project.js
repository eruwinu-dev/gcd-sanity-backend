export default {
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
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
			name: "address",
			title: "Address",
			type: "text",
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
	],
}


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
			name: "team",
			ttile: "Team",
			type: "text",
		},
		{
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "reference", to: { type: "projectCategory" } }],
		},
		{
			name: "body",
			title: "Body",
			type: "blockContent",
		},
		{
			name: "images",
			title: "Images",
			type: "text",
		},
		{
			name: "order",
			title: "Order",
			type: "number",
		},
	],
}


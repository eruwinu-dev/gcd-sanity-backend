export default {
	name: "author",
	title: "Author",
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
			name: "role",
			title: "Role",
			type: "string",
		},
		{
			name: "order",
			title: "Order",
			type: "number",
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		},
		{
			name: "otherImages",
			title: "Other Images",
			type: "text",
		},
		{
			name: "blogbio",
			title: "Blog Bio",
			type: "text",
		},
		{
			name: "bio",
			title: "Bio",
			type: "array",
			of: [
				{
					title: "Block",
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
				},
			],
		},
	],
	preview: {
		select: {
			title: "name",
			media: "image",
		},
	},
}


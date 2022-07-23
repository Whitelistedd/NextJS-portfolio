export default {
    name: 'experiences',
    title: 'Experiences',
    type: 'document',
    fields: [
        {
            name: 'date',
            title: 'Date',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'details',
            title: 'Details',
            type: 'array',
            of: [
                {
                    name: 'Exp',
                    title: 'Experiences',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: Rule => Rule.required()
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'string',
                            validation: Rule => Rule.required()
                        },
                    ]
                },
            ],
            options: [

            ]
        },
    ],

    preview: {
        select: {
            date: 'date',
        },
        prepare(selection) {
            const { date, desc } = selection
            return {
                title: date,
            }
        },
    },
}

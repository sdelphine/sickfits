const Mutations = {
    async createItem(parent, args, ctx, info) {
        // TODO check if they are loogged in

        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);
        return item
    },

    updateItem(parent, args, ctx, info) {
        // first take copy of the updates
        const updates = { ...args };
        // remove the ID from the update
        delete updates.id
        // run the update method
        return ctx.db.mutation.updateItem({
            data: updates,
            where: {
                id: args.id,
            }
        },
        info)
    }
};

module.exports = Mutations;

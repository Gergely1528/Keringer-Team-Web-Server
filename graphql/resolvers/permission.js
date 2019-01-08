import Permission from '../../Models/permission';

export default {


    Query: {
        readPermission: async (root, { email }, req, res) => {
            const permission = await Permission.findOne({ email });
            if (!permission) {
                return null
            }
            return permission;

        }
    },

    Mutation: {
        createPermission: async (root, { email }, req, res) => {
            try {
                const existingPermission = await User.findOne({ email });
                if (existingPermission) {
                    throw new Error('A felhasználó már rendelkezik jogosultságokkal');
                }
                const permission = new Permission({ email }).save();
                return permission;
            } catch (err) {
                throw err;
            }
        },
        updatePermission: async (root, { email, readUser, readUsers, createUser, updateUser, deleteUser, loginUser, updater, updated }) => {

            const permission = await Permission.findOneAndUpdate({ email }, {
                $set: {
                    readUser: readUser,
                    readUsers: readUsers,
                    createUser: createUser,
                    updateUser: updateUser,
                    deleteUser: deleteUser,
                    loginUser: loginUser,
                    updater: updater,
                    updated: updated
                }
            }, { new: true });

            if (!permission) {
                throw new Error('Érvénytelen felhasználó, vagy a jogosultság nem található');
            }

            return permission;
        },
        deletePermission: async (root, { email }) => {
            const permission = await Permission.findOneAndDelete({ email })
            if (!permission) {
                throw new Error('Érvénytelen felhasználó, vagy a jogosultság nem található');
            }
            return permission;
        }
    }
}
import User from '../../Models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createToken = (user, secret, expiresIn) => {

    const { firstname, email } = user;

    return jwt.sign({
        firstname, email
    }, "5c33b9d245b4832d8821b27e", { expiresIn, })

}

export default {


    Query: {
        readUser: async (root,{ email }) => {           
            try{
                const user = await User.findOne({ email });
                if (!user) {
                    return new Error('Érvénytelen felhasználónév');
                }
                return user;
            }
            catch (err){
                console.log(err);
                throw err;
            }
        },
        readUsers: async () => {
            try {
                const users = await User.find();
                return users.map(user => {
                    return { ...user._doc, _id: user.id };
                });
            }
            catch (err) {
                throw err;
                console.log(err);
            }
            finally{
                console.log("Mutation : readUser sikeresen lefutott");
            }
        }
    },

    Mutation: {
        loginUser: async (root, { email, password }, req, res) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new Error('User Not Found');
            }

            const isValidPassword = await bcrypt.compare(password, user.password);

            if (!isValidPassword) {
                throw new Error('inValid password');
            }

            return { token: createToken(user, process.env.JWT_SECRET, "1hr") };

        },
        createUser: async (root, { email, password, firstname, lastname, creator, created }, req, res) => {

            try {
                const existingUser = await User.findOne({ email });
                if (existingUser) {
                    throw new Error('User exists already.');
                }
                const hashedPassword = await bcrypt.hash(password, 12);

                const user = new User({
                    email,
                    password: hashedPassword,
                    firstname,
                    lastname,
                    creator,
                    created
                }).save();

                return user;
            } catch (err) {
                throw err;
            }
        },
        updateUser: async (root, { email, firstname, lastname, updater, updated }) => {

            const user = await User.findOneAndUpdate({ email }, {$set:{
                firstname: firstname ,
                lastname: lastname ,
                updater:  updater ,
                updated: updated 
            }}, { new: true });

            if (!user) {
                throw new Error('User Not Found');
            }

            return user;
        },
        deleteUser: async (root, { email }) => {
            const user = await User.findOneAndDelete({ email })
            if (!user) {
                throw new Error('User Not Found');
            }
            return user;
        }


    }
}

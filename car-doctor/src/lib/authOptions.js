
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import dbConnect, { dbCollections } from "./dbConnect";
const authOptions = {
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: {  },
            password: { }
          },
          async authorize(credentials, req) {
            
            

            const { email, password } = credentials;
            const userCollection = await dbConnect(dbCollections.usersCollection);
            const user = await userCollection.findOne({ email});
            if (user) {

              //TODO: Add password hashing and verification here
              // Any object returned will be saved in `user` property of the JWT
              // You can also use the `user` object to set a session cookie or perform any other actions you need.
              // For example, you can set a session cookie like this:
              const isPasswordMatched = bcrypt.compareSync(
                password,
                user.password
              );

              if (!isPasswordMatched) {
                alert('Invalid email or password');
                return null;
              }

              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
       // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        })
      ],
      pages: {
        signIn: '/signin',
      },
    callbacks: {
      async signIn({ user, account, profile }) {
        return true;
      },
    },
  };

  export default authOptions;
const { AuthorizationCheck } = require("@/config/authorization-check");
const { auth } = require("firebase-admin");
const { default: RentList } = require("./rent-list");

export default async function Page() {
    const session = await auth();
    return(
         <>
         <AuthorizationCheck/>
        <RentList userId={session?.user?.id}/>
        </>
    )
}
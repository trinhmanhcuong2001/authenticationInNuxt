const users = [
    {
        id: 1,
        userName: "CuongCon",
        email: "cuong69pro@gmail.com",
        password: "1",
        roles: ["admin", "user"],
    },
    {
        id: 2,
        userName: "MinhTe",
        email: "minhte27@gmail.com",
        password: "1",
        roles: ["user"],
    },
];
export default defineEventHandler(async (event) => {
    const method = event.node.req.method;
    const query = getQuery(event);

    if (method === "GET" && query.id) {
        const user = users.find((u) => u.id === Number(query.id));
        if (user) {
            return user;
        } else {
            return { message: "User not found" };
        }
    }
    if (method === "PUT") {
        const body = await readBody(event);

        const user = users.find((u) => u.id === Number(body.id));

        if (user) {
            user.roles = body.roles;
            return;
        }
    }
    return users;
});

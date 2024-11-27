export default defineEventHandler((event) => {
    const method = event.node.req.method;
    const permissionData = [
        {
            name: "admin",
            permissions: ["viewUser", "editUser", "createUser"],
        },
        {
            name: "user",
            permissions: ["viewUser"],
        },
    ];

    if (method === "GET") {
        return permissionData;
    }
});



function router(params) {
const routes = [
    {path:'/', view: () => console.log('dashboard page')},
    {path:'/posts', view: () =>  console.log('posts page')},
    {path:'/products', view: () =>  console.log('products page')},
];
const potentialRoutes = routes.map((item) => {
    return {
        route: item,
        isMatch: location.pathname === item.path,
    };
});
    let match = potentialRoutes.find((route) => route.isMatch);
    console.log(match.route.view())
}

document.addEventListener("DOMContentLoaded", () => {
    router();
});
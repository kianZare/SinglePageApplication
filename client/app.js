import Dashboard from "/client/pages/Dashboard.js";
import Products from "/client/pages/Products.js";
import Posts from "/client/pages/Posts.js";

function router(params) {
const routes = [
    {path:'/', view: Dashboard},
    {path:'/products', view: Products},
    {path:'/posts', view: Posts},
];
const potentialRoutes = routes.map((item) => {
    return {
        route: item,
        isMatch: location.pathname === item.path,
    }; 
});

let match = potentialRoutes.find((route) => route.isMatch);
    
if (!match) {
    match = {
        route: { path: "/not-found", view: () => console.log("not-found page")},
        isMatch:true,
    };
}
    document.querySelector("#app").innerHTML = match.route.view();
    console.log(match.route.view());
}
// push user to new url 
function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}


window.addEventListener('popstate', router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });  
    router(); 
});



// sidebar-toggler
const sidebarToggler = document.querySelector(".sidebar-toggler");
const sidebar = document.querySelector(".nav");

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("mini-sidebar");
    
});

export const formatDate = (date:string) => {
   const array = date.split('-');
    return array[0]
}

export const createPortalRoot = () => {
    const drawerRoot = document.createElement("div");
    drawerRoot.setAttribute("id", "drawer-root");

    return drawerRoot;
}

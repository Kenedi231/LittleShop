import getInitPOST from "../../getInitPOSTForFile";

function newItem(data) {
    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('description', data.description);
    return fetch('/item/new', getInitPOST(formData)).then(response => response.json())
}

export default newItem;
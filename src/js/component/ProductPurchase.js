export default class ProductPurchase {
    constructor() {}

    render() {
        document.querySelector("#app").innerHTML = this.#getTemplate();
    }

    #getTemplate() {
        return `<h3 id="product-purchase">상품구매</h3>`;
    }
}

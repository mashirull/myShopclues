export const useDiscount = (price ,  discountPercentage) => {

    const discount = price - (price*discountPercentage/100)

    return discount
}
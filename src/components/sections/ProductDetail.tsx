import { ProductDetailsSection, getOverriddenSection } from '@faststore/core'
import { CustomBuyButton } from '../CustomBuyButton';

const ProductDetailsWithCustomButton = getOverriddenSection({
    Section: ProductDetailsSection,
    components: {
        BuyButton: {
            Component: CustomBuyButton
        }
    },
})

export default ProductDetailsWithCustomButton;
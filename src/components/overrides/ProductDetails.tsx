import { SectionOverride } from '@faststore/core'
import CustomBtn from '../PDP/CustomBtn';
import CustomTitle from '../PDP/CustomTitle';

const section = 'ProductDetails';

const override: SectionOverride = {
    section,
    components: {
        BuyButton: {
            Component: CustomBtn
        },
        ProductTitle: {
            Component: CustomTitle
        }
    }
}

export { override }

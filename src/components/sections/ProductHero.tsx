import {
    HeroSection,
    getOverriddenSection,
    useDynamicContent,
} from "@faststore/core";
import { ServerDynamicContentQuery } from "@faststore/core/api";

const OverridenHero = getOverriddenSection({
    Section: HeroSection,
    components: {
        HeroImage: {
            Component: CustomHeroImage,
        },
    },
});

function CustomHeroImage() {
    const context = useDynamicContent<ServerDynamicContentQuery>();

    return (
        <img
            src={
                context.data?.extraData?.customFieldFromRoot ??
                "https://via.placeholder.com/350"
            }
            width={400}
            alt={context.data?.extraData?.customField ?? "Hero section image"}
        />
    );
}

export default function ProductHero(
    props: React.ComponentProps<typeof OverridenHero>
) {
    const context = useDynamicContent<ServerDynamicContentQuery>();
    return (
        <OverridenHero
            {...props}
            image={{ src: "noop", alt: "noop" }}
            title={
                context.data?.extraData?.customField ??
                "Add the Hero section title here"
            }
        />
    );
}
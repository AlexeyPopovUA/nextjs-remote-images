import {HomeNavLink} from '@/app/HomeNavLink';
import type {Metadata} from 'next';
import {Messages} from '@/app/shared/Messages';

export const metadata: Metadata = {
    title: Messages.home.title,
    description: Messages.home.description,
};

export default function Home() {
    return (
        <div className="mb-32 grid text-center lg:mt-32 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <HomeNavLink
                path="/examples/caching-properties/"
                label={Messages.cachingProperties.title}
                description={Messages.cachingProperties.description}
            />
        </div>
    );
}

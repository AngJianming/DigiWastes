import React, {Fragment,Suspense,lazy} from 'react';
import MasterLayout from "../components/masterLayout/Master-Layout";
import LazyLoader from "../components/masterLayout/lazyLoader";
const Analytics =lazy(() => import('../components/Analytics/Analytics'));
const AnalyticsPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Analytics/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default AnalyticsPage;
import React, {Fragment,Suspense,lazy} from 'react';
import MasterLayout from "..masterLayout/Master-Layout";
import LazyLoader from "..masterLayout/lazyLoader";
const Analytics =lazy(() => import('../Analytics/Analytics'));
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
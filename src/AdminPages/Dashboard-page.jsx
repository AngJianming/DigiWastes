import React, {Fragment,Suspense,lazy} from 'react';
import MasterLayout from "./masterLayout/Master-Layout";
import LazyLoader from "./masterLayout/lazyLoader";
const Dashboard =lazy(() => import('./Dashboard/Dashboard'));
const DashboardPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                <Suspense fallback={<LazyLoader/>}>
                    <Dashboard/>
                </Suspense>
            </MasterLayout>
        </Fragment>
    );
};

export default DashboardPage;
// Compare this snippet from src/AdminPages/Analytics-page.jsx:

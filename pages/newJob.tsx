import Layout from 'components/layout';
import TwoSidedWrapper from 'components/twoSidedWrapper';
import React, { useState } from 'react'
import JobStepOne from 'components/jobForm/stepOne.component';

type Props = {}

function RightComponent() {
    return (
        <div>
            Markos Bahgat
        </div>
    );
}

const NewJob = (props: Props) => {
    const [step, setStep] = useState(1)

    const handleSteps = (value: number) => {
        setStep(value)
    }
    return (
        <Layout pageKey="SignUp" needsAuth={false}>
            <TwoSidedWrapper
                LeftComponent={<JobStepOne handleSteps={handleSteps} />}
                RightComponent={<RightComponent />}
                imageURL={
                    'https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80'
                }
            />
        </Layout>
    )
}

export default NewJob;

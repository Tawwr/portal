import MultiCheckBox from 'components/multiCheckBox';
import React from 'react'
import { ListBox } from '../listbox';
import { useForm } from 'react-hook-form';
import TTextInput from 'components/shared/textInput';

interface Props {
    handleSteps: (value: number) => void,
}

const StepTwo: React.FC<Props> = ({ handleSteps }) => {
    const options = [
        {
            id: 1,
            name: "Open to conversations",
            avatar: '📧'
        },
        {
            id: 2,
            name: "Ready to interview",
            avatar: '💭'
        }
    ];
    const chooseOptions = [
        { id: 1, name: 'Leslie Alexander' },
    ]
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ mode: 'all', criteriaMode: 'all' })
    const onSubmit = handleSubmit((data) => {
        reset()

    })
    const infoInputs = [
        {
            title: "Work Experience",
            label: "How Much Expreience do you have? Please select no more than 2.",
            options: chooseOptions
        },
        {
            title: "Job type",
            label: "What type of job are you looking for?",
            options: chooseOptions
        },
        {
            title: "Relevant Roles",
            label: "What sorts of roles are you looking for? Please select no more than 3.",
            options: chooseOptions
        },
        {
            title: "Relevant Industries",
            label: "What Industries are you interested in? Please select no more that 3.",
            options: chooseOptions
        },
        {
            title: "Where would you prefer to work?",
            label: "",
            options: chooseOptions
        },
    ]
    return (
        <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <hr className='mb-5' />
            <ListBox options={options} label="Where are you at in your job search?" />
            <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                    What are you looking for in your next role?
                </label>
                <div className="mt-1">
                    <TTextInput
                        id='nextRoleDes'
                        isTextArea={true}
                        name="nextRoleDes"
                        register={register}
                        error={errors.nextRoleDes?.message ?? undefined}
                    />
                </div>
            </div>
            <hr className='mt-10' />
            <h2 className='font-bold text-2xl'>Job Preferences</h2>
            <p>Tell companies what you are looking for in your next role</p>
            <div className='flex flex-col gap-5 my-10'>
                {
                    infoInputs.map(item => (
                        <div key={Date.now()}>
                            <h3 className='font-bold text-xl mb-3'>{item.title}</h3>
                            <MultiCheckBox options={item.options} label={item.label} />
                        </div>
                    ))
                }
                <div className="relative flex items-start">
                    <div className="flex h-5 items-center">
                        <input
                            id="comments"
                            aria-describedby="comments-description"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label
                            htmlFor="comments"
                            className="font-medium text-gray-700"
                        >
                            I'm open to remote roles
                        </label>
                    </div>
                </div>
                <div>
                    <h3 className='font-bold text-xl'>What is your expected salary?</h3>
                    <p className='mb-3 text-gray-700'>This should only be your cash amount you are looking for and not including methods of compensation</p>
                    <div className='flex flex-row gap-5 mb-10'>
                        <MultiCheckBox options={chooseOptions} />
                        <TTextInput
                            type="number"
                            name="salary"
                            id="salary"
                            autoComplete="salary"
                            placeholder="$2500"
                            register={register}
                            error={errors.salary?.message ?? undefined}
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-row items-center justify-end gap-5">
                <button
                    onClick={() => handleSteps(1)}
                    className="text-md  flex justify-center rounded-md border-2 border-transparent border-black py-3 px-4 font-medium tracking-wide text-black shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                    Back
                </button>
                <button
                    type="submit"
                    className="text-md flex w-[35%] justify-center rounded-md border border-transparent border-black bg-black py-3 px-4 font-medium  tracking-wide text-white shadow-sm hover:border-2 hover:bg-transparent hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                    Submit Application
                </button>
            </div>
        </form>
    )
}

export default StepTwo
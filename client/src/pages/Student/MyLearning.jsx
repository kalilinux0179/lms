import React, { useState } from 'react'
import Course from './Course';
import { Skeleton } from '@/components/ui/skeleton';
import CardSkeleton from '@/components/CardSkeleton';

const MyLearning = () => {
    const [isLoading, setIsLoading] = useState(false);
    const LeaarningCourseArray = [
        {
            "courseThumbnail": "https://www.greenstechnologys.com/images/reactjs.jpg",
            authorImage: "https://github.com/shadcn.png",
            title: "ReactJS Course in Hindi",
            authorName: "Alex Alderson",
            level: "Beginner",
            price: "499"
        },
        {
            "courseThumbnail": "https://img-c.udemycdn.com/course/750x422/4351794_0bd8.jpg",
            authorImage: "https://github.com/shadcn.png",
            authorName: "Harsh Sharma",
            title: "NextJS Course in Hindi",
            level: "Advance",
            price: "799"
        }
    ]
    return (
        <>
            <main className='min-h-screen pt-20 pb-8'>
                <div className="container mx-auto">
                    <div className='py-20 flex flex-col min-h-96 items-center gap-16'>
                        <h1 className='text-4xl font-bold tracking-wider text-center'>My Courses</h1>
                        {
                            isLoading ?
                                (
                                    <>
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-x-6 gap-y-8'>
                                            {
                                                Array.from({ length: 4 }).map((_, index) => <CardSkeleton key={index} />)
                                            }
                                        </div>
                                    </>
                                ) :
                                (
                                    LeaarningCourseArray.length === 0 ?
                                        (
                                            <p className='text-2xl font-bold tracking-wider text-center w-full'>
                                                You are not enrolled in any course</p>
                                        ) :
                                        <>
                                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-x-6 gap-y-8'>
                                                {
                                                    (LeaarningCourseArray.map((course, index) => {
                                                        return (
                                                            <Course key={index} course={course} />
                                                        )
                                                    }
                                                    )
                                                    )
                                                }
                                            </div>

                                        </>
                                )
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default MyLearning

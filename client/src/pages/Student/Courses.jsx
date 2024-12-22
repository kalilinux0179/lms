import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import Course from './Course'

const SkeletonCard = () => {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}


const Courses = () => {
    const courseArray = [
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
        }, {
            "courseThumbnail": "https://programmerspoint.in/images/angular-course.jpg",
            authorImage: "https://github.com/shadcn.png",
            title: "AngularJS Course in Hindi",
            authorName: "Anju Mishra",
            level: "Beginner",
            price: "699"
        },
        {
            "courseThumbnail": "https://s3.amazonaws.com/angularminds.com/new-blog-images/top-10-features-of-vuejs-for-web-apps.svg",
            authorImage: "https://github.com/shadcn.png",
            title: "VueJS Course in Hindi",
            authorName: "Manjeet Patel",
            level: "Beginner",
            price: "399"
        }
    ]
    const isLoading = false
    return (
        <>
            <div className='flex flex-col min-h-96 items-center mt-16 gap-16'>
                <h1 className='text-4xl font-bold tracking-wider'>Our Courses</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-x-6 gap-y-8'>
                    {
                        isLoading ?
                            Array.from({ length: 4 }).map((_, index) => <SkeletonCard key={index} />) :
                            courseArray.map((course, index) => <Course key={index} course={course} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Courses

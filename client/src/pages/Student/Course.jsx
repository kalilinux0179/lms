import {
    Card,
    CardContent,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const Course = ({course}) => {
    
    return (
        <>
            <Card className="overflow-hidden transform transition duration-500 hover:drop-shadow-2xl p-4 cursor-pointer">
                <img
                    src={course.courseThumbnail}
                    alt={course.title}
                    className="w-full object-cover object-center rounded-lg h-40 shadow-md"
                />
                <CardContent className="space-y-4 py-6 px-1">
                    <p className="text-xl font-bold truncate text-center">{course.title}</p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={course.authorImage} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h1>{course.authorName}</h1>
                        </div>
                        <Badge className="text-md rounded-full px-6 tracking-wider">{course.level}</Badge>
                    </div>
                    <p><span className="font-bold">₹{course.price}</span> only</p>
                </CardContent>
            </Card>
        </>
    )
}

export default Course

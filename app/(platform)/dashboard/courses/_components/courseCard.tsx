import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Link from 'next/link';

interface CourseProps {
    id: string;
    name: string;
    description: string;
    numLesson: number;
    imageUrl: string;
    progress: number;
};

const CourseCard = ({ course }: { course: CourseProps }) => {
    return (
        <Link href="courses/programming/lesson-1" >
            <Card className="w-full max-w-sm overflow-hidden">
                <CardHeader className="p-0">
                    <img
                        src={course.imageUrl || "data:image/jpeg;base64,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"}
                        alt={course.name}
                        className="w-full h-40 object-cover"
                    />
                </CardHeader>
                <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Progress</span>
                        <span className="text-sm font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="w-full" />
                </CardContent>
                <CardFooter className="bg-gray-50 p-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Enroll
                    </button>
                </CardFooter>
            </Card>
        </Link>
    )
};

export { CourseCard };
import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "./icon-badge";
import { BookOpen } from "lucide-react";
import { CourseProgress } from "./course-progress";


interface CourseCardProps {
    id: string;
    title: string;
    imageUrl: string;
    chaptersLength: number;
    progress: number | null;
  }

export const CourseCard = ({
    id,
    title,
    imageUrl,
    chaptersLength,
    progress,
}: CourseCardProps) =>{
    return(
        <Link href={`/labs/${id}`}>
            <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full hover:border-slate-400">
            <div className="relative w-full aspect-video rounded-md overflow-hidden">
                <Image 
                    src={imageUrl}
                    alt={title}
                    className="object-cover"
                    fill 
                />
            </div>
             <div className="flex flex-col pt-2">
                <div className="text-lg md:text-base font-medium group-hover:text-sky-700 line-clamp-2">
                    {title}
                </div>
                <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                <div className="flex items-center gap-x-1 text-slate-500">
                        <IconBadge size="sm" icon={BookOpen}/>
                        <span>
                        {chaptersLength} {chaptersLength === 1 ? "Глава" : "Глав"}
                        </span>
                </div>
                </div>
            
               {progress !== null ? (
                
                <CourseProgress 
                variant={progress === 100 ? "success" : 'default'}
                size="sm"
                value={progress}
                />
               ):(
                <p></p>
               )}
            

             </div>
            </div>
        </Link>
    )
}
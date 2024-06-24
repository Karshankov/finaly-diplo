import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Categories } from "./_components/categories";
import SearchInput from "@/components/search-input";
import { getLabs } from "@/actions/get-labs";
import CoursesList from "@/components/labs-list";

interface SearchPageProps {
    searchParams:{
        title: string;
        categoryId: string,
    }
}

const SearchPage = async({
    searchParams
}: SearchPageProps) => {
    const { userId } = auth();
    if (!userId) {
        return redirect("/")
    }


const labs = await getLabs({
    userId,
    ...searchParams,
})

    return (
    <>
    <div className="px-6 pt-6 md:hidden md:mb-0 block">
        <SearchInput />
    </div> 
    <div className="p-6 space-y-4">
        <CoursesList items={labs}/>
    </div>
    
    </>
    );
}
 
export default SearchPage;
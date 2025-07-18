import  {LoaderOne}  from "@/components/ui/loader";


export default function Loading() {
  return(
    <main className="h-screen w-screen bg-purple-200 flex justify-center items-center bg-purple-500">
        <LoaderOne />
    </main>
  )
}
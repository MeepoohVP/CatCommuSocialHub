import Card from "@/components/card"
export default function Post(){
    return (
        <>
        <div className="flex flex-col items-center mt-4">
            <Card account = "../garfield.jpeg" picture="../cat.jpeg"/>
            <Card account = "../garfield.jpeg" picture="../cat.jpeg"/>
            <Card account = "../garfield.jpeg" picture="../cat.jpeg"/>
        </div>
        </>
    )
}
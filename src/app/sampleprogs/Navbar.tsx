import Link from "next/link";

export default function Navbar(){
    return(
        <div>
            <Link href={'/sampleprogs'}>Home</Link> |
            <Link href={'/sampleprogs/prog1'}>Program1</Link> |
            <Link href={'/sampleprogs/add'}>Add Two Numbers</Link> |
            <Link href={'/sampleprogs/factorial'}>Factorial</Link> |
            <Link href={'/sampleprogs/palindrome'}>Palindrome</Link> |
        </div>

    );
}
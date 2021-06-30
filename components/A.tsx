import Link from "next/link";


function A({text, href} : {text: string, href: string}) {
    return (
        <Link href={`${href}`}>
            <a>{text}</a>
        </Link>
    );
}

export default A;
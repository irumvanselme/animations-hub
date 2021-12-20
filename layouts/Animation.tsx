import { useEffect } from "react";
import { all, one } from "../utils/animations";
import { useRouter } from "next/router";

export default function AnimationLayout ({ children }) {
    const router = useRouter();

    useEffect(() => {
        const id = parseInt(router.pathname.split('/')[3]);

        console.log(one(id))
    }, [router.pathname])

    return <div>
        <h1>This is the animation Layout</h1>
        <div>{children}</div>
    </div>
}
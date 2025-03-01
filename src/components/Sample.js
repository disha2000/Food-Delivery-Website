import { useEffect } from "react";

const Sample = () => {
    useEffect(() => {
        console.log('Sample Effect')
    }, [])
    return (
        <div>Sample</div>
    )
}

export default Sample
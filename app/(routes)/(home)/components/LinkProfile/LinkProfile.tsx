"use client";

// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// export default function LinkProfile() {
//     const [isCopiedLink, setCopiedLink] = useState(false);

//     const copyLink = () => {
//         if (typeof window !== "undefined") {

//             const url = `${window.location.origin}/DiTreeTest`;
//             navigator.clipboard.writeText(url);

//             setCopiedLink(true);
//         }
//     };
//     console.log("isCopiedLink", isCopiedLink);



//     return (
//         <div className="bg-indigo-100 rounded-3xl">
//             <div className="flex flex-col justify-center text-center py-4 px-4 
//            items-center gap-2 md:flex-row md:justify-between md:text-left">
//                 <span className="text-sm">
//                     <span>🔥 Your Di Tree Clone is live:</span>{window?.location.origin}

//                     @DiTreeCloneDev
//                 </span>

//                 <Button
//                     variant={"outline"}
//                     className="rounded-full px-4 bg-white font-semibold text-sm md:text-[16px]"
//                     onClick={copyLink}>
//                     {isCopiedLink ? "Copied" : "Copy Your DiTree Clone URL"}
//                 </Button>
//             </div>
//         </div>
//     )
// }


import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function LinkProfile() {
    const [isCopiedLink, setCopiedLink] = useState(false);
    const [origin, setOrigin] = useState(""); // Estado para almacenar el valor de window.location.origin

    useEffect(() => {
        if (typeof window !== "undefined") {
            setOrigin(window.location.origin); // Establece el valor de window.location.origin en el cliente
        }
    }, []);

    const copyLink = () => {
        if (typeof window !== "undefined") {
            const url = `${window.location.origin}/DiTreeTest`;
            navigator.clipboard.writeText(url);
            setCopiedLink(true);
        }
    };

    console.log("isCopiedLink", isCopiedLink);

    return (
        <div className="bg-indigo-100 rounded-3xl">
            <div className="flex flex-col justify-center text-center py-4 px-4 
           items-center gap-2 md:flex-row md:justify-between md:text-left">
                <span className="text-sm">
                    <span>🔥 Your Di Tree Clone is live:</span> {origin}
                    @DiTreeCloneDev
                </span>

                <Button
                    variant={"outline"}
                    className="rounded-full px-4 bg-white font-semibold text-sm md:text-[16px]"
                    onClick={copyLink}>
                    {isCopiedLink ? "Copied" : "Copy Your DiTree Clone URL"}
                </Button>
            </div>
        </div>
    );
}
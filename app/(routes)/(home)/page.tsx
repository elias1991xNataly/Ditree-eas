
//import { Button } from "@/components/ui/button";

import { TreePalm } from "lucide-react";

//import { toast } from "sonner";
export default function HomePage() {

    return (
        <div >

            <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-4 px-4">
                <div>
                    {/* Link Profile */}
                    <p>Link Profile ...</p>
                    <div>
                        {/* Profile Info */}
                        <div>
                            <p>Profile info ...</p>
                        </div>

                        <div className="mt-20 flex-col items-center">
                            <div className="py-10 text-center  justify-center 
                            flex flex-col items-center text-gray-400 font-semibold">
                                <TreePalm className="h-20 w-20 strokeWidth=(1)" />
                                <p>Show the world who you are.</p>
                                <p>Add a link to get started.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Profile Preview */}

                <div>
                    <p>Profile Preview</p>
                </div>
            </div>
        </div>
    );
}

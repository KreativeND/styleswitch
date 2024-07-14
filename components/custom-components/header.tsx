import { cn } from '@/lib/utils'
import { Eclipse, SettingsIcon } from 'lucide-react'
import React from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from '../ui/input';


const Header = () => {
    return (
        <header className="w-screen">
            <div className="flex py-4 px-8 justify-between items-center w-full">
                <div className="flex items-center gap-2">
                    <Eclipse color="#FAFAFA" />
                    <h1 className={cn("text-[22.5px] text-[#FAFAFA]")}>StyleSwitch</h1>
                </div>
                <Popover>
                    <PopoverTrigger>
                        <div className="bg-[#3D404A] w-[40px] h-[40px] grid place-content-center rounded-lg cursor-pointer">
                            <SettingsIcon color="#FAFAFA" />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className='bg-[#212429] border-none'>
                        <div className='text-[#FAFAFA] w-[84px] h-[40px]'><p>API key</p></div>
                        <Input />
                    </PopoverContent>
                </Popover>

            </div>
        </header>
    )
}

export default Header;
